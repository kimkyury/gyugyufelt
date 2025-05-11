package com.gyugyufelt.gyugyufelt.domain;

import jakarta.persistence.*


@Entity
@Table(name = "felt_models")
data class FeltModel(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val name: String // 예: 루피, 토끼 등
)

