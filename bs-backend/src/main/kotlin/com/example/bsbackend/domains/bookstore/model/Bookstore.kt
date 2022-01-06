package com.example.bsbackend.domains.bookstore.model

import javax.persistence.*

@Entity(name = "bookstore")
data class Bookstore(
    @Column(name = "bookstore_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var bookstoreId: Int = 0,
    @Column(name = "address") var address: String
)