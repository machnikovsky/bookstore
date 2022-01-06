package com.example.bsbackend.domains.shipment.repository

import com.example.bsbackend.domains.shipment.model.Shipment
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface ShipmentRepository : JpaRepository<Shipment, Int>