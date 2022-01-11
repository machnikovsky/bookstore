package com.example.bsbackend.domains.book.model.entity

enum class Genre(val genre: String) {
    HORROR("HORROR"), CONTEMPORARY("CONTEMPORARY"), THRILLER("THRILLER"),
    SCIFI("SCIFI"), FANTASY("FANTASY"), ADVENTURE("Przygoda"),
    ROMANCE("ROMANCE"), MYSTERY("MYSTERY"), FICTION("FICTION"),
    NONFICTION("NONFICTION"), CHILDRENS("CHILDRENS")
}