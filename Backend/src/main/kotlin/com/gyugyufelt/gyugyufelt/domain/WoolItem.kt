package com.gyugyufelt.gyugyufelt.domain

import jakarta.annotation.Generated
import jakarta.persistence.*


@Entity
@Table(name = "wool_items")
data class WoolItem(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    val name: String,

    val color: String
)