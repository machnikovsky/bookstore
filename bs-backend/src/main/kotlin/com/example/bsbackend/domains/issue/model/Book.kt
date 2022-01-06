package com.example.bsbackend.domains.issue.model

import javax.persistence.*


@Entity(name = "book")
data class Book(
    @Column(name = "book_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var bookId: Int = 0,
    @Column(name = "title") var title: String,
    @Column(name = "genre") @Enumerated(value = EnumType.STRING) var genre: Genre,
    @Column(name = "original_publication_year") var originalPublicationYear: Int
)
