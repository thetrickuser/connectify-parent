package com.connectify.user_service.controller;

import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @GetMapping("/details")
    @Secured("ROLE_USER")
    public String getProfileDetails() {
        return "Profile details accessed";
    }
}
