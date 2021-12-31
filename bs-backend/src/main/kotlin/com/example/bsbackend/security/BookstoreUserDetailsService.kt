package com.example.bsbackend.security

import com.example.bsbackend.domains.user.repository.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService

class BookstoreUserDetailsService(private val userRepository: UserRepository): UserDetailsService {

    override fun loadUserByUsername(username: String?): UserDetails {
        return userRepository
            .findByUsernameIgnoreCase(username)
            ?.let { BookstoreUserDetails(it) }
            ?: throw RuntimeException("Placeholder message.")
    }
}