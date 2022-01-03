package com.example.bsbackend.security.jwt

import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Service
import java.util.Date
import java.util.function.Function
import kotlin.collections.HashMap

@Service
class JwtUtil {

    private val secret: String = "secret_to_be_changed_later"

    fun getUsernameFromToken(token: String): String = getClaimFromToken(token, Claims::getSubject)
    fun getExpirationDateFromToken(token: String): Date = getClaimFromToken(token, Claims::getExpiration)

    fun generateToken(userDetails: UserDetails): String {
        val claims: Map<String, Any> = HashMap()
        val username = userDetails.username
        return createToken(claims, username)
    }

    fun validateToken(token: String?, userDetails: UserDetails): Boolean {
        val username = getUsernameFromToken(token!!)
        return (username == userDetails.username) && !isTokenExpired(token)
    }

    private fun <T> getClaimFromToken(token: String, claimsResolver: Function<Claims, T>): T {
        val claims: Claims = getAllClaimsFromToken(token)
        return claimsResolver.apply(claims)
    }

    private fun getAllClaimsFromToken(token: String): Claims {
        return Jwts.parser().setSigningKey(secret)
            .parseClaimsJws(token).body
    }

    private fun isTokenExpired(token: String): Boolean {
        val expiration = getExpirationDateFromToken(token)
        return expiration.before(Date(System.currentTimeMillis()))
    }

    private fun createToken(claims: Map<String, Any>, subject: String): String =
        Jwts.builder()
            .setClaims(claims)
            .setSubject(subject)
            .setIssuedAt(Date())
            .setExpiration(Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
            .signWith(SignatureAlgorithm.HS256, secret)
            .compact()
}