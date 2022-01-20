package com.example.bsbackend.domains.user.model.entity

import javax.persistence.*


@Entity(name = "person")
data class Person(
    @Column(name = "person_id")
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "person_person_id_seq")
    @SequenceGenerator(name="person_person_id_seq", sequenceName="person_person_id_seq", allocationSize=100)
    var personId: Int = 0,
    @Column(name = "first_name") var firstName: String,
    @Column(name = "last_name") var lastName: String,
    @Column(name = "phone_number") var phoneNumber: String = "",
    @Column(name = "gender") @Enumerated(EnumType.STRING) var gender: Gender = Gender.OTHER,
)