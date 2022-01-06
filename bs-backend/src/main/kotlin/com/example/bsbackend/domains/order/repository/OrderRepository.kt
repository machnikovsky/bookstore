package com.example.bsbackend.domains.order.repository

import com.example.bsbackend.domains.payment.model.Payment
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface OrderRepository : JpaRepository<Payment, Int>