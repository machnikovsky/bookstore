package com.example.bsbackend.domains.user.model

import java.time.Instant
import javax.persistence.*

@Entity(name = "account")
data class User(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var userId: Long,
    @Column var username: String,
    @Column var email: String,
    @Column var password: String,
    @Column var firstName: String,
    @Column var lastName: String,
    @Column var phoneNumber: String,
    @Column var creationDate: Instant,
    @ElementCollection(fetch = FetchType.EAGER) @Enumerated(value = EnumType.STRING) var roles: MutableSet<Role>
)