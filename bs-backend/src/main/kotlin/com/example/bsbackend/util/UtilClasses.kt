package com.example.bsbackend.util

import org.modelmapper.ModelMapper
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Component

@Component
class UtilClasses {
    @Bean
    fun getModelMapper(): ModelMapper = ModelMapper()
}