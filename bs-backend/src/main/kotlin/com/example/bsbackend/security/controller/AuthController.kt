package com.example.bsbackend.security.controller

import com.example.bsbackend.domains.user.model.User
import com.example.bsbackend.domains.user.model.UserRegistrationDto
import com.example.bsbackend.domains.user.service.UserService
import com.example.bsbackend.security.BookstoreUserDetailsService
import com.example.bsbackend.security.jwt.JwtAuthRequest
import com.example.bsbackend.security.jwt.JwtAuthResponse
import com.example.bsbackend.security.jwt.JwtUtil
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = ["http://localhost:3000"])
class AuthController(
    val authenticationManager: AuthenticationManager,
    val bookstoreUserDetailsService: BookstoreUserDetailsService,
    val jwtUtil: JwtUtil,
    val userService: UserService
) {

    @PostMapping("/authenticate")
    fun createAuthenticationToken(@RequestBody authRequest: JwtAuthRequest): ResponseEntity<Any> {
        try {
            authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken(
                    authRequest.username,
                    authRequest.password
                )
            )
        } catch (e: Exception) {
            return ResponseEntity
                .status(NOT_FOUND)
                .body("Invalid username or password, error message: ${e.message}")
        }
        val userDetails = bookstoreUserDetailsService.loadUserByUsername(authRequest.username)
        val jwtToken = jwtUtil.generateToken(userDetails)
        return ResponseEntity.ok(JwtAuthResponse(jwtToken))
    }

    @PostMapping("/register")
    fun registerUser(@RequestBody userRegistrationDto: UserRegistrationDto): ResponseEntity<User> {
        return ResponseEntity.ok(userService.registerUser(userRegistrationDto))
    }

    @GetMapping("/username")
    fun getUsername(): ResponseEntity<Any> = SecurityContextHolder.getContext().authentication
        ?.let { ResponseEntity.ok(it.name) }
        ?: ResponseEntity.status(NOT_FOUND).body("Not found.")
}