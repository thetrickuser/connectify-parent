package com.connectify.shared_security.model;

import java.util.Objects;

import org.springframework.security.core.GrantedAuthority;

public class Role implements GrantedAuthority {
    private String authority;

    public Role(String role) {
        this.authority = role;
    }

    @Override
    public String getAuthority() {
        return authority;
    }

    @Override 
    public boolean equals(Object o) { 
        if (this == o) return true; 
        if (o == null || getClass() != o.getClass()) return false; 
        Role role = (Role) o; 
        return authority.equals(role.authority); 
    } 
    
    @Override 
    public int hashCode() { 
        return Objects.hash(authority); 
    }

}
