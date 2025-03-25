package com.gyugyufelt.gyugyufelt.domain;

import jakarta.persistence.*
import java.time.LocalDateTime


@Entity
data class ColorAnalysis (

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long =0,

    val imagePath: String,

    val kValue: Int,

    val createAt: LocalDateTime = LocalDateTime.now(),

    @OneToMany(mappedBy = "analysis", cascade = [CascadeType.ALL], orphanRemoval = true)
    val colors: MutableList<ExtractedColor> = mutableListOf()

)
