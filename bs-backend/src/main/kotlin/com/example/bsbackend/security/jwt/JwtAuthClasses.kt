package com.example.bsbackend.security.jwt

data class JwtAuthRequest(val username: String, val password: String)
data class JwtAuthResponse(val jwt: String)