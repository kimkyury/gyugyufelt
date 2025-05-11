package com.gyugyufelt.gyugyufelt.dto

class ColorAnalysisResponse (

    val id: Long,
    val imagePath: String,
    val colors: List<ColorDTO>
)

data class ColorDTO(
    val hexCode: String,
    val ratio: Float
)