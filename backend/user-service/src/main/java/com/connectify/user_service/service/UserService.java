package com.connectify.user_service.service;

import com.connectify.shared_security.jwt.JwtTokenProvider;
import com.connectify.shared_security.model.UserAuth;
import com.connectify.shared_security.repository.AuthRepository;
import com.connectify.user_service.dto.LoginRequest;
import com.connectify.user_service.dto.RegisterRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserService {

    private final AuthRepository authRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    public UserService(
            AuthRepository authRepository,
            PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider) {
        this.authRepository = authRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    public void registerUser(RegisterRequest request) {
        UserAuth user = new UserAuth();
        user.setEmail(request.email());
        user.setPasswordHash(passwordEncoder.encode(request.password()));
        user.setRoles(List.of("ROLE_USER"));
        user.setCreatedAt(LocalDateTime.now());
        authRepository.save(user);
    }

    public String loginUser(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.email(), request.password()));
        if (authentication.isAuthenticated()) {
            List<String> roles = authentication.getAuthorities().stream().map(role -> role.getAuthority()).toList();
            String token = jwtTokenProvider.generateToken(request.email(), roles);
            return token;
        }
        return null;
    }
}
