package com.example.bsbackend.domains.issueOrder.repository

import com.example.bsbackend.domains.issueOrder.model.IssueOrder
import com.example.bsbackend.domains.order.model.Order
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface IssueOrderRepository : JpaRepository<IssueOrder, Int> {
    fun findByOrder(order: Order): IssueOrder?
}


