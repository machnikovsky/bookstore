package com.example.bsbackend.domains.issue.model.dto

import com.example.bsbackend.domains.author.model.Author
import com.example.bsbackend.domains.rating.model.dto.RatingDTO
import com.google.gson.annotations.SerializedName

data class IssueInfoDTO(
    @SerializedName("issue_id") var issueId: Int = 0,
    @SerializedName("language") var language: String = "",
    @SerializedName("publication_year") var publicationYear: Int = 0,
    @SerializedName("number_of_pages") var numberOfPages: Int? = 0,
    @SerializedName("cover_type") var coverType: String? = "",
    @SerializedName("book_type") var bookType: String = "",
    @SerializedName("price") var price: Float = 0f,
    @SerializedName("image_url") var imageUrl: String = "",
    @SerializedName("background_url") var backgroundUrl: String = "",
    @SerializedName("publishing_house_id") var publishingHouseId: Int = 0,
    @SerializedName("book_id") var bookId: Int = 0,
    @SerializedName("title") var title: String = "",
    @SerializedName("description") var description: String = "",
    @SerializedName("genre") var genre: String = "",
    @SerializedName("original_publication_year") var originalPublicationYear: Int = 0,
    @SerializedName("authors") var authors: List<Author> = mutableListOf(),
    @SerializedName("ratings") var ratings: List<RatingDTO> = mutableListOf(),
    @SerializedName("mean_score") var meanScore: String = ""
)

