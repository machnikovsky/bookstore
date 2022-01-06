package com.example.bsbackend.domains.author.model

import javax.persistence.*

@Entity(name = "author")
data class Author(
    @Column(name = "author_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var authorId: Int = 0,
    @Column(name = "first_name") var firstName: String,
    @Column(name = "last_name") var lastName: String,
    @Column(name = "country") var country: String
)
