package com.gyugyufelt.gyugyufelt.domain

import jakarta.persistence.*

@Entity
@Table(name = "tags")
data class Tag(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val name: String
)
