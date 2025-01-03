package com.connectify.user_service.controller;

import com.connectify.user_service.dto.LoginRequest;
import com.connectify.user_service.dto.LoginResponse;
import com.connectify.user_service.dto.RegisterRequest;
import com.connectify.user_service.dto.RegisterResponse;
import com.connectify.user_service.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    @ResponseStatus(code = HttpStatus.CREATED)
    public RegisterResponse register(@RequestBody RegisterRequest request) {
        userService.registerUser(request);
        return new RegisterResponse("Success", null, HttpStatus.CREATED.value());
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        String token = userService.loginUser(request);
        return new LoginResponse("Success", token, HttpStatus.OK.value());
    }
}
