package com.connectify.shared_security.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.connectify.shared_security.model.UserAuth;

@Repository
public interface AuthRepository extends MongoRepository<UserAuth, String> {
    Optional<UserAuth> findByEmail(String email);
}
