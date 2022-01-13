package com.example.bsbackend.domains.book.model.entity

enum class Genre(val genre: String) {
    HORROR("Horror"), CONTEMPORARY("Literatura współczesna"), THRILLER("Thriller"),
    SCIFI("Science Fiction"), FANTASY("Fantastyka"), ADVENTURE("Przygoda"),
    ROMANCE("Romans"), MYSTERY("Tajemnica"), FICTION("Fikcja"),
    NONFICTION("Literatura faktu"), CHILDRENS("Dla dzieci")
}