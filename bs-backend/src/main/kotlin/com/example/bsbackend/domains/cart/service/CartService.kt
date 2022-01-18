package com.example.bsbackend.domains.cart.service

import com.example.bsbackend.domains.cart.model.Cart
import com.example.bsbackend.domains.cart.model.CartPosition
import com.example.bsbackend.domains.cart.repository.CartPositionRepository
import com.example.bsbackend.domains.cart.repository.CartRepository
import com.example.bsbackend.domains.issue.repository.IssueRepository
import com.example.bsbackend.domains.issue.service.IssueService
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class CartService(
    private val cartRepository: CartRepository,
    private val cartPositionRepository: CartPositionRepository,
    private val issueRepository: IssueRepository,
    private val issueService: IssueService
) {
    fun getCart(): ResponseEntity<Any> {
        val user = issueService.getCurrentUser()
            ?: return ResponseEntity.status(NOT_FOUND).body("Could not get currently logged in user")
        val cart = cartRepository.findByUser(user)
            ?: cartRepository.save(Cart(user = user))
        return cartPositionRepository.findAllByCart(cart)
            .map { issueService.mapIssueToCartDTO(it.issue, it.count) }
            .let { ResponseEntity.ok(it) }
    }

    fun addIssueToCart(issueId: Int): ResponseEntity<Any> {
        //TODO: Implement 'check if issue is available in your bookstore' logic
        //TODO: Fix data.sql once merged, 'cien wiatru' audiobook has pages and book doesnt
        val issue = issueRepository.findIssueByIssueId(issueId)
            ?: return ResponseEntity.status(NOT_FOUND).body("Could not find issue with ID $issueId")
        val user = issueService.getCurrentUser()
            ?: return ResponseEntity.status(NOT_FOUND).body("Could not get currently logged in user")
        val cart = cartRepository.findByUser(user)
            ?: cartRepository.save(Cart(user = user))
        val cartPosition = cartPositionRepository.findByCartAndIssue(cart, issue)
            ?.let { it.copy(count = it.count + 1, issue = issue, cart = cart) }
            ?: CartPosition(count = 1, issue = issue, cart = cart)

        cartPositionRepository.save(cartPosition)

        return ResponseEntity.ok("Successfully added an issue to cart.")
    }

}