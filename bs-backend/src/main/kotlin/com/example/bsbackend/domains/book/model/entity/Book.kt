package com.example.bsbackend.domains.book.model.entity

import com.example.bsbackend.domains.author.model.Author
import com.example.bsbackend.domains.rating.model.Rating
import javax.persistence.*


@Entity(name = "book")
data class Book(
    @Id
    @Column(name = "book_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_book_id_seq")
    @SequenceGenerator(name="book_book_id_seq", sequenceName="book_book_id_seq", allocationSize=100)
    var bookId: Int = 0,
    @Column(name = "title") var title: String,
    @Column(name = "description", length = 2000) var description: String,
    @Column(name = "genre") @Enumerated(value = EnumType.STRING) var genre: Genre,
    @Column(name = "original_publication_year") var originalPublicationYear: Int,
    @ManyToMany
    @JoinTable(name = "author_book",
        joinColumns = [JoinColumn(name = "book_id")],
        inverseJoinColumns = [JoinColumn(name = "author_id")]
    )
    var authors: List<Author>,
    @OneToMany
    @JoinColumn(name = "book_id", referencedColumnName = "book_id")
    var ratings: List<Rating> = mutableListOf()
)
