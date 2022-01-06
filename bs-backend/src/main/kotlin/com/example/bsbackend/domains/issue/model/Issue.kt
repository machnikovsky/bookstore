package com.example.bsbackend.domains.issue.model

import javax.persistence.*

@Entity
@Table(name = "issue")
data class Issue(
    @Column(name = "issue_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var issueId: Int,
    @Column(name = "language") var language: String,
    @Column(name = "publication_year") var publicationYear: Int,
    @Column(name = "number_of_pages") var numberOfPages: Int,
    @Column(name = "cover_type") @Enumerated(EnumType.STRING) var coverType: CoverType,
    @Column(name = "book_type") @Enumerated(EnumType.STRING) var bookType: BookType,
    @Column(name = "price") var price: Float,
    @Column(name = "image_url") var imageUrl: String,
    @Column(name = "publishing_house_id") var publishingHouseId: Int,
    @Column(name = "book_id") var bookId: Int
)