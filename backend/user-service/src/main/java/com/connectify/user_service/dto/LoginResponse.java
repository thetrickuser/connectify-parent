package com.connectify.user_service.dto;

public record LoginResponse(String message, String token, int statusCode) {}
