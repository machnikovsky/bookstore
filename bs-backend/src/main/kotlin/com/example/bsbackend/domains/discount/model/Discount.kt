package com.example.bsbackend.domains.discount.model

import javax.persistence.*

@Entity(name = "discount")
data class Discount(
    @Column(name = "discount_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var discountId: Int = 0,
    @Column(name = "percent") var percent: Int,
    @Column(name = "discount_code") var discountCode: String
)
