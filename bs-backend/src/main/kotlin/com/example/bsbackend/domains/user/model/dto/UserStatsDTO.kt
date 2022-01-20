package com.example.bsbackend.domains.user.model.dto

import com.google.gson.annotations.SerializedName

data class UserStatsDTO(
    @SerializedName("books") var books: Int = 0,
    @SerializedName("pages") var pages: Int = 0,
    @SerializedName("mean_score") var meanScore: Double = 0.0,
)