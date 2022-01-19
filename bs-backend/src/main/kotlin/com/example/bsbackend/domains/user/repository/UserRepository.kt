package com.example.bsbackend.domains.user.repository

import com.example.bsbackend.domains.user.model.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface UserRepository : JpaRepository<User, Int> {
    fun findByUsernameIgnoreCase(username: String?): User?
    fun findByUserId(userId: Int): User?
    @Transactional
    @Modifying
    fun removeUserByUserId(userId: Int)
}