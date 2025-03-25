package com.gyugyufelt.gyugyufelt.domain;

import jakarta.persistence.*
import java.time.LocalDateTime


@Entity
data class ExtractedColor (

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long =0,

    val hexCode: String,

    val ratio: Float,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "analysis_id")
    val analysis: ColorAnalysis

)
