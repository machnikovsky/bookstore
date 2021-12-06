package com.example.bsbackend.model

import javax.persistence.*

@Entity
@Table(name = "issue")
data class Issue(
    @Column(name = "issue_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val issueId: Int,
    @Column(name = "language") val language: String,
    @Column(name = "publication_year") val publicationYear: Int,
    @Column(name = "number_of_pages") val numberOfPages: Int,
    @Column(name = "cover_type") @Enumerated(EnumType.STRING) val coverType: CoverType,
    @Column(name = "price") val price: Float,
    @Column(name = "image_url") val imageUrl: String,
    @Column(name = "publishing_house_id") val publishingHouseId: Int,
    @Column(name = "book_id") val bookId: Int
)