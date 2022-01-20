package com.example.bsbackend.domains.bookstore.service

import com.example.bsbackend.domains.bookstore.model.dto.BookstoreStatsDTO
import com.example.bsbackend.domains.issueOrder.repository.IssueOrderRepository
import com.example.bsbackend.domains.order.repository.OrderRepository
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service

@Service
class BookstoreService(
    private val orderRepository: OrderRepository,
    private val issueOrderRepository: IssueOrderRepository
) {

    fun getStats(): ResponseEntity<Any> {
        val orders = orderRepository.findAll()
        val income = orders
            .map { it.totalPrice }
            .takeIf { it.isNotEmpty() }
            ?.reduce { sum, value -> sum + value }
            ?.cutToTwoDecimals()
            ?: 0.0f

        val soldBooks = orders
            .map { issueOrderRepository.findAllByOrder(it) }
            .flatMap { listOfOrders ->
                listOfOrders.map { order -> order?.count ?: 0 }
            }
            .takeIf { it.isNotEmpty() }
            ?.reduce { sum, value -> sum + value }
            ?: 0

        return ResponseEntity.ok(BookstoreStatsDTO(income, soldBooks))
    }

}

fun Float.cutToTwoDecimals(): Float =
    "%.2f".format(this).replace(",", ".").toFloatOrNull() ?: 0f