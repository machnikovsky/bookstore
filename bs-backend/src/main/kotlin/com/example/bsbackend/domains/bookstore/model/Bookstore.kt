package com.example.bsbackend.domains.bookstore.model

import javax.persistence.*

@Entity(name = "bookstore")
data class Bookstore(
    @Id
    @Column(name = "bookstore_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "bookstore_bookstore_id_seq")
    @SequenceGenerator(name="bookstore_bookstore_id_seq", sequenceName="bookstore_bookstore_id_seq", allocationSize=100)
    var bookstoreId: Int = 0,
    @Column(name = "address") var address: String
)