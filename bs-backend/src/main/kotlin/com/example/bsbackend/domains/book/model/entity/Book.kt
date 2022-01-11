package com.example.bsbackend.domains.book.model.entity

import com.example.bsbackend.domains.author.model.Author
import org.hibernate.annotations.Fetch
import org.hibernate.annotations.FetchMode
import javax.persistence.*


@Entity(name = "book")
data class Book(
    @Column(name = "book_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var bookId: Int = 0,
    @Column(name = "title") var title: String,
    @Column(name = "genre") @Enumerated(value = EnumType.STRING) var genre: Genre,
    @Column(name = "original_publication_year") var originalPublicationYear: Int,
    @ManyToMany
    @JoinTable(name = "author_book",
        joinColumns = [JoinColumn(name = "author_id")],
        inverseJoinColumns = [JoinColumn(name = "book_id")]
    )
    var authors: List<Author>
)
