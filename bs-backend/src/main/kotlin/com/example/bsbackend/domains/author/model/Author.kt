package com.example.bsbackend.domains.author.model

import com.example.bsbackend.domains.book.model.entity.Book
import org.hibernate.annotations.Fetch
import org.hibernate.annotations.FetchMode
import javax.persistence.*

@Entity(name = "author")
data class Author(
    @Id
    @Column(name = "author_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "author_author_id_seq")
    @SequenceGenerator(name="author_author_id_seq", sequenceName="author_author_id_seq", allocationSize=100)
    var authorId: Int = 0,
    @Column(name = "first_name") var firstName: String,
    @Column(name = "last_name") var lastName: String,
    @Column(name = "country") var country: String,
    @Transient
    @ManyToMany(mappedBy = "authors")
    var books: List<Book>
)
