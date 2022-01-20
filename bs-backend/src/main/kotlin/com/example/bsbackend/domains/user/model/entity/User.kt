package com.example.bsbackend.domains.user.model.entity

import com.example.bsbackend.domains.bookstore.model.Bookstore
import java.sql.Date
import javax.persistence.*

@Entity(name = "account")
data class User(
    @Column(name = "account_id")
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "account_account_id_seq")
    @SequenceGenerator(name="account_account_id_seq", sequenceName="account_account_id_seq", allocationSize=100)
    var userId: Int = 0,
    @Column(name = "login") var username: String,
    @Column(name = "password") var password: String,
    @Column(name = "email") var email: String,
    @Column(name = "creation_date") var creationDate: Date,
    @ElementCollection(fetch = FetchType.EAGER) @Enumerated(value = EnumType.STRING) var roles: MutableSet<Role>,
    @OneToOne
    @JoinColumn(name = "person_id", referencedColumnName = "person_id") var person: Person,
    @OneToOne
    @JoinColumn(name = "bookstore_id", referencedColumnName = "bookstore_id") var bookstore: Bookstore
)