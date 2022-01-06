package com.example.bsbackend.domains.publishingHouse.model

import javax.persistence.*

@Entity(name = "publishing_house")
data class PublishingHouse(
    @Column(name = "publishing_house_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var publishingHouseId: Int = 0,
    @Column(name = "name") var name: String,
    @Column(name = "foundation_year") var foundationYear: Int
)

