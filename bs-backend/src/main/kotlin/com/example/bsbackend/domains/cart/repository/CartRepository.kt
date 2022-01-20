package com.example.bsbackend.domains.cart.repository

import com.example.bsbackend.domains.cart.model.Cart
import com.example.bsbackend.domains.user.model.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CartRepository: JpaRepository<Cart, Int> {
    fun findByUser(user: User): Cart?
}