package com.gyugyufelt.gyugyufelt.domain

import jakarta.persistence.*

@Entity
@Table(name = "colors")
data class Color(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val hexCode: String,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    val post: Post
)
