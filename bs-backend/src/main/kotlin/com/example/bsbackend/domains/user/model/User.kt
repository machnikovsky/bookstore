package com.example.bsbackend.domains.user.model

import java.sql.Date
import java.sql.Timestamp
import java.time.Instant
import java.time.LocalDate
import javax.persistence.*

@Entity(name = "account")
data class User(
    @Column(name = "account_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var userId: Int = 0,
    @Column(name = "login") var username: String,
    @Column(name = "password") var password: String,
    @Column(name = "email") var email: String,
    @Column(name = "creation_date") var creationDate: Date,
    @ElementCollection(fetch = FetchType.EAGER) @Enumerated(value = EnumType.STRING) var roles: MutableSet<Role>,
    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "person_id", referencedColumnName = "person_id") var person: Person
)