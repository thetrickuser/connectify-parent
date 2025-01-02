package com.connectify.shared_security.jwt;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.crypto.SecretKey;

import com.connectify.shared_security.model.Role;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtTokenProvider {

    private String secret = "kj324k3j4nm23lk125kl47q3n44654k64lq342";
    private long expiration = 60000l;

    private static Logger log = LoggerFactory.getLogger(JwtTokenProvider.class);

    public String generateToken(String username, List<String> roles) {
        log.info("Generating token for user: {}", username);
        return Jwts.builder()
                .subject(username)
                .claim("roles", roles)
                .signWith(getKey())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expiration))
                .compact();
    }

    public Authentication getAuthentication(String token) {
        log.info("Getting authentication object from token: {}", token);
        Claims claims = parseClaimsFromToken(token);
        List<String> roles = claims.get("roles", List.class);
        List<Role> authorities = roles.stream().map(Role::new).toList();
        return new UsernamePasswordAuthenticationToken(claims.getSubject(), "", authorities);

    }

    public String extractUsername(String token) {
        log.info("Extracting username from token: {}", token);
        return parseClaimsFromToken(token).getSubject();
    }

    public List<String> extractRoles(String token) {
        log.info("Extracting roles from token: {}", token);
        List<?> roles = parseClaimsFromToken(token).get("roles", List.class);
        return roles.stream().map(Object::toString).collect(Collectors.toList());
    }

    private Claims parseClaimsFromToken(String token) {
        log.info("Extracting claims from token: {}", token);
        return Jwts.parser()
                .verifyWith(getKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public boolean validateToken(String token) {
        log.info("Validating token: {}", token);
        try {
            Jwts.parser()
                .verifyWith(getKey())
                .build()
                .parseSignedClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            log.error("Error validating token: {}", e.getMessage());
            return false;
        }
    }

    private SecretKey getKey() {
        return Keys.hmacShaKeyFor(secret.getBytes());
    }

}
