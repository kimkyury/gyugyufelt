package com.gyugyufelt.gyugyufelt.controller

import com.gyugyufelt.gyugyufelt.dto.ColorAnalysisResponse
import com.gyugyufelt.gyugyufelt.service.ColorAnalysisService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/color-analysis")
class ColorAnalysisController(
    private val colorAnalysisService: ColorAnalysisService
) {

    @PostMapping
    fun analyzeColors(
        @RequestParam k: Int,
        @RequestParam imagePath: String // 임시로 path 받자!
    ): ResponseEntity<ColorAnalysisResponse> {
        val response = colorAnalysisService.analyzeAndSave(k, imagePath)
        return ResponseEntity.ok(response)
    }
}