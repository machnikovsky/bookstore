package com.example.bsbackend.domains.cart.service

import com.example.bsbackend.domains.assortment.repository.AssortmentRepository
import com.example.bsbackend.domains.cart.model.Cart
import com.example.bsbackend.domains.cart.model.CartPosition
import com.example.bsbackend.domains.cart.model.dto.toCart
import com.example.bsbackend.domains.cart.repository.CartPositionRepository
import com.example.bsbackend.domains.cart.repository.CartRepository
import com.example.bsbackend.domains.issue.repository.IssueRepository
import com.example.bsbackend.domains.issue.service.IssueService
import com.example.bsbackend.domains.issueOrder.model.IssueOrder
import com.example.bsbackend.domains.issueOrder.repository.IssueOrderRepository
import com.example.bsbackend.domains.order.model.Order
import com.example.bsbackend.domains.order.repository.OrderRepository
import com.example.bsbackend.domains.payment.model.Payment
import com.example.bsbackend.domains.payment.model.PaymentStatus
import com.example.bsbackend.domains.payment.repository.PaymentRepository
import com.example.bsbackend.domains.shipment.model.Shipment
import com.example.bsbackend.domains.shipment.model.ShipmentStatus
import com.example.bsbackend.domains.shipment.repository.ShipmentRepository
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import java.sql.Date
import java.time.LocalDate

@Service
class CartService(
    private val cartRepository: CartRepository,
    private val cartPositionRepository: CartPositionRepository,
    private val issueRepository: IssueRepository,
    private val assortmentRepository: AssortmentRepository,
    private val orderRepository: OrderRepository,
    private val paymentRepository: PaymentRepository,
    private val shipmentRepository: ShipmentRepository,
    private val issueOrderRepository: IssueOrderRepository,
    private val issueService: IssueService
) {
    fun getCart(): ResponseEntity<Any> {
        val user = issueService.getCurrentUser()
            ?: return ResponseEntity.status(NOT_FOUND).body("Could not get currently logged in user")
        val cart = cartRepository.findByUser(user)
            ?: cartRepository.save(Cart(user = user))
        return cartPositionRepository.findAllByCart(cart)
            .map { issueService.mapIssueToCartDTO(it.issue, it.count) }
            .toCart()
            .let { ResponseEntity.ok(it) }
    }

    fun addIssueToCart(issueId: Int): ResponseEntity<Any> {
        val issue = issueRepository.findFistByIssueId(issueId)
            ?: return ResponseEntity.status(NOT_FOUND).body("Could not find issue with ID $issueId")
        val user = issueService.getCurrentUser()
            ?: return ResponseEntity.status(NOT_FOUND).body("Could not get currently logged in user")
        val cart = cartRepository.findByUser(user)
            ?: cartRepository.save(Cart(user = user))
        val cartPosition = cartPositionRepository.findByCartAndIssue(cart, issue)
            ?.let { it.copy(count = it.count + 1, issue = issue, cart = cart) }
            ?: CartPosition(count = 1, issue = issue, cart = cart)

        return assortmentRepository.findByBookstoreAndIssueIssueId(user.bookstore, issue.issueId)
            ?.also {
                if (it.count > 1)
                    assortmentRepository.save(it.copy(count = it.count - 1))
                else
                    assortmentRepository.delete(it)
            }
            ?.also { cartPositionRepository.save(cartPosition) }
            ?.let { ResponseEntity.ok("Successfully added an issue to cart.") }
            ?: return ResponseEntity.status(NOT_FOUND).body("Could not add an issue to cart.")
    }

    fun payForItemsInCart(): ResponseEntity<Any> {
        val user = issueService.getCurrentUser()
            ?: return ResponseEntity.status(NOT_FOUND).body("Could not get currently logged in user")
        val cart = cartRepository.findByUser(user)
            ?: return ResponseEntity.status(NOT_FOUND).body("Could not get cart currently of logged in user")

        val payment = paymentRepository.save(
            Payment(
                paymentStatus = PaymentStatus.ACCEPTED
            )
        )

        val shipment = shipmentRepository.save(
            Shipment(
                shipmentStatus = ShipmentStatus.ACCEPTED,
                address = ""
            )
        )

        val order = orderRepository.save(Order(
            totalPrice = cartPositionRepository
                .findAllByCart(cart)
                .map { it.issue.price * it.count }
                .takeIf { it.isNotEmpty() }
                ?.reduce { sum, value -> sum + value }
                ?: 0.0f,
            date = Date.valueOf(LocalDate.now()),
            user = user,
            payment = payment,
            shipment = shipment
        ))

        cartPositionRepository
            .findAllByCart(cart)
            .forEach {
                issueOrderRepository.save(
                    IssueOrder(
                        order = order,
                        issue = it.issue,
                        count = it.count
                    )
                )
            }



        cartPositionRepository.removeAllByCart(cart)
        return ResponseEntity.ok("Successfully paid for items in cart.")
    }

}