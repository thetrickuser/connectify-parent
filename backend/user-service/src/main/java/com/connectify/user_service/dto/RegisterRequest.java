package com.connectify.user_service.dto;

import java.time.LocalDate;

public record RegisterRequest(
        String email,
        String password,
        String fullName,
        LocalDate dob,
        Gender gender
) {}
