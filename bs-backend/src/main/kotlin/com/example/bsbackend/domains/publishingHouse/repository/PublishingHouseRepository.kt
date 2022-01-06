package com.example.bsbackend.domains.publishingHouse.repository

import com.example.bsbackend.domains.publishingHouse.model.PublishingHouse
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface PublishingHouseRepository : JpaRepository<PublishingHouse, Int>