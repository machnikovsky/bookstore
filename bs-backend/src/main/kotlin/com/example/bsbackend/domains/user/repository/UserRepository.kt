package com.example.bsbackend.domains.user.repository

import com.example.bsbackend.domains.user.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, Int> {
    fun findByUsernameIgnoreCase(username: String?): User?
    fun findByUserId(userId: Int): User?
}