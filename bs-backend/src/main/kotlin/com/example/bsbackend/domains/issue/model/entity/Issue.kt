package com.example.bsbackend.domains.issue.model.entity

import com.example.bsbackend.domains.book.model.entity.Book
import com.example.bsbackend.domains.publishingHouse.model.PublishingHouse
import javax.persistence.*

@Entity
@Table(name = "issue")
data class Issue(
    @Id
    @Column(name = "issue_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "issue_issue_id_seq")
    @SequenceGenerator(name="issue_issue_id_seq", sequenceName="issue_issue_id_seq", allocationSize=100)
    var issueId: Int = 0,
    @Column(name = "language") var language: String,
    @Column(name = "publication_year") var publicationYear: Int,
    @Column(name = "number_of_pages") var numberOfPages: Int?,
    @Column(name = "cover_type") @Enumerated(EnumType.STRING) var coverType: CoverType?,
    @Column(name = "book_type") @Enumerated(EnumType.STRING) var bookType: BookType,
    @Column(name = "price") var price: Float,
    @Column(name = "image_url") var imageUrl: String,
    @Column(name = "background_url") var backgroundUrl: String,
    @ManyToOne @JoinColumn(name="publishing_house_id", nullable=false) var publishingHouse: PublishingHouse,
    @ManyToOne @JoinColumn(name="book_id", nullable=false) var book: Book,
)