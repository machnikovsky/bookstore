package com.example.bsbackend.domains.cart.model

import com.example.bsbackend.domains.user.model.User
import javax.persistence.*

@Entity(name = "cart")
data class Cart(
    @Id
    @Column(name = "cart_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cart_cart_id_seq")
    @SequenceGenerator(name="cart_cart_id_seq", sequenceName="cart_cart_id_seq", allocationSize=100)
    var cartId: Int = 0,

    @OneToOne
    @JoinColumn(name = "account_id", referencedColumnName = "account_id") var user: User,
)
