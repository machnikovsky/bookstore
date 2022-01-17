package com.example.bsbackend.domains.publishingHouse.model

import javax.persistence.*

@Entity(name = "publishing_house")
data class PublishingHouse(
    @Id
    @Column(name = "publishing_house_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "publishing_house_publishing_house_id_seq")
    @SequenceGenerator(name="publishing_house_publishing_house_id_seq", sequenceName="publishing_house_publishing_house_id_seq", allocationSize=100)
    var bookId: Int = 0,
    @Column(name = "name") var name: String,
    @Column(name = "foundation_year") var foundationYear: Int
)

