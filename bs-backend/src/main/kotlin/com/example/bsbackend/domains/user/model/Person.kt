package com.example.bsbackend.domains.user.model

import java.time.LocalDate
import javax.persistence.*


@Entity(name = "person")
data class Person(
    @Column(name = "person_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var personId: Int = 0,
    @Column(name = "first_name") var firstName: String,
    @Column(name = "last_name") var lastName: String,
    @Column(name = "phone_number") var phoneNumber: String,
    @Column(name = "gender") @Enumerated(value = EnumType.STRING) var gender: Gender,
)