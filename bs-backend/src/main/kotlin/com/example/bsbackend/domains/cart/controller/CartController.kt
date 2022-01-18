package com.example.bsbackend.domains.cart.controller

import com.example.bsbackend.domains.cart.service.CartService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = ["http://localhost:3000"])
class CartController(
    private val cartService: CartService
) {

    @PostMapping("/add/{issueId}")
    fun addIssueToCart(@PathVariable("issueId") issueId: Int): ResponseEntity<Any> =
        cartService.addIssueToCart(issueId)

}