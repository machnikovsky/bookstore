package com.example.bsbackend.domains.shipment.model

import javax.persistence.*


@Entity(name = "shipment")
data class Shipment(
    @Column(name = "shipment_id") @Id @GeneratedValue(strategy = GenerationType.IDENTITY) var shipmentId: Int = 0,
    @Column(name = "status") @Enumerated(value = EnumType.STRING) var shipmentStatus: ShipmentStatus,
    @Column(name = "address") var address: String
)
