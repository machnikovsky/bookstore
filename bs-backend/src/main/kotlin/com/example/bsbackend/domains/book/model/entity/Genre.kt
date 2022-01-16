package com.example.bsbackend.domains.book.model.entity

enum class Genre(val genre: String) {
    HORROR("Horror"), CONTEMPORARY("Literatura obyczajowa"), CRIME("Kryminał"),
    SCIFI("Science Fiction"), FANTASY("Fantastyka"), ADVENTURE("Przygoda"),
    ROMANCE("Romans"), MYSTERY("Tajemnica"), FICTION("Fikcja"),
    NONFICTION("Reportaż"), CHILDRENS("Dla dzieci")
}