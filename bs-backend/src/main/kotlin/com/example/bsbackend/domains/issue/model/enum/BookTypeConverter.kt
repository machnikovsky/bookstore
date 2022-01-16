package com.example.bsbackend.domains.issue.model.enum

import javax.persistence.AttributeConverter
import javax.persistence.Converter

@Converter(autoApply = true)
class BookTypeConverter: AttributeConverter<BookType, String> {
    override fun convertToDatabaseColumn(attribute: BookType?): String = attribute?.name?:""
    override fun convertToEntityAttribute(dbData: String?): BookType = BookType.values().first { it.name == dbData }
}