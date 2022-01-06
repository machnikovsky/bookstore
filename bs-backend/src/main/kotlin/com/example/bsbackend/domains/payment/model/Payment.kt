package com.example.bsbackend.domains.payment.model

import javax.persistence.*

@Entity(name = "payment")
data class Payment(
    @Column(name = "payment_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var paymentId: Int = 0,
    @Column(name = "status") @Enumerated(value = EnumType.STRING) var paymentStatus: PaymentStatus
)
