package com.example.bsbackend.domains.order.model

import com.example.bsbackend.domains.payment.model.Payment
import com.example.bsbackend.domains.shipment.model.Shipment
import com.example.bsbackend.domains.user.model.entity.User
import java.sql.Date
import javax.persistence.*


@Entity(name = "order")
data class Order(
    @Column(name = "order_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var orderId: Int = 0,
    @Column(name = "total_price") var totalPrice: Float,
    @Column(name = "date_of_order") var date: Date,
    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "account_id", referencedColumnName = "account_id") var user: User,
    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "payment_id", referencedColumnName = "payment_id") var payment: Payment,
    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "shipment_id", referencedColumnName = "shipment_id") var shipment: Shipment
)
