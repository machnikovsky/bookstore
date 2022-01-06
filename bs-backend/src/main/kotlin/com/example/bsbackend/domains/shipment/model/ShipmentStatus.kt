package com.example.bsbackend.domains.shipment.model


enum class ShipmentStatus(val shipmentStatus: String) {
    ACCEPTED("ACCEPTED"),
    SHIPPED("SHIPPED"),
    DELIVERED("DELIVERED")
}