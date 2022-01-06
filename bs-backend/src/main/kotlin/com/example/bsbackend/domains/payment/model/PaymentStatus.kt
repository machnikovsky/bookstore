package com.example.bsbackend.domains.payment.model

enum class PaymentStatus(val paymentStatus: String) {
    ACCEPTED("ACCEPTED"), REJECTED("REJECTED")
}