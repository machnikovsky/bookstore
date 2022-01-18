package com.example.bsbackend.domains.cart.model

import com.example.bsbackend.domains.issue.model.entity.Issue
import javax.persistence.*

@Entity(name = "cart_position")
data class CartPosition(
    @Id
    @Column(name = "cart_position_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cart_position_cart_position_id_seq")
    @SequenceGenerator(
        name = "cart_position_cart_position_id_seq",
        sequenceName = "cart_position_cart_position_id_seq",
        allocationSize = 100
    )
    var cartPositionId: Int = 0,

    @Column(name = "count")
    var count: Int,

    @OneToOne
    @JoinColumn(name = "issue_id", referencedColumnName = "issue_id")
    var issue: Issue,

    @ManyToOne
    @JoinColumn(name = "cart_id", nullable = false)
    var cart: Cart,
)
