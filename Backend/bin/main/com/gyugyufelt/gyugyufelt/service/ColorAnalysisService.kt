package com.gyugyufelt.gyugyufelt.service

import com.gyugyufelt.gyugyufelt.domain.ColorAnalysis
import com.gyugyufelt.gyugyufelt.domain.ExtractedColor
import com.gyugyufelt.gyugyufelt.dto.ColorAnalysisResponse
import com.gyugyufelt.gyugyufelt.dto.ColorDTO
import com.gyugyufelt.gyugyufelt.repository.ColorAnalysisRepository
import org.springframework.stereotype.Service

@Service
class ColorAnalysisService(
    private val colorAnalysisRepository: ColorAnalysisRepository
) {

    fun analyzeAndSave(k: Int, imagePath: String): ColorAnalysisResponse {
        // 1. 임의 색상 추출 (예시)
        val dummyColors = listOf(
            "#FFAA00" to 0.4f,
            "#112233" to 0.3f,
            "#CCDDFF" to 0.3f
        ).take(k)

        val analysis = ColorAnalysis(
            imagePath = imagePath,
            kValue = k
        )

        val colors = dummyColors.map {
            ExtractedColor(hexCode = it.first, ratio = it.second, analysis = analysis)
        }

        analysis.colors.addAll(colors)
        val saved = colorAnalysisRepository.save(analysis)

        return ColorAnalysisResponse(
            id = saved.id,
            imagePath = saved.imagePath,
            colors = saved.colors.map {
                ColorDTO(it.hexCode, it.ratio)
            }
        )
    }
}
