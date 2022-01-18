package com.example.bsbackend.domains.cart.repository

import com.example.bsbackend.domains.cart.model.Cart
import com.example.bsbackend.domains.cart.model.CartPosition
import com.example.bsbackend.domains.issue.model.entity.Issue
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CartPositionRepository: JpaRepository<CartPosition, Int> {
    fun findAllByCart(cart: Cart): List<CartPosition>
    fun findByCartAndIssue(cart: Cart, issue: Issue): CartPosition?
}