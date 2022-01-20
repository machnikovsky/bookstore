package com.example.bsbackend.domains.user.repository

import com.example.bsbackend.domains.user.model.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
interface UserRepository : JpaRepository<User, Int> {
    fun findByUsernameIgnoreCase(username: String?): User?
    fun findByUserId(userId: Int): User?
    fun findAllByUsernameContainingIgnoreCase(username: String): List<User>

    @Transactional
    @Modifying
    fun removeUserByUserId(userId: Int)
}