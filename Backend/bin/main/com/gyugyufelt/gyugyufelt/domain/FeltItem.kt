package com.gyugyufelt.gyugyufelt.domain

import jakarta.persistence.*

@Entity
@Table(name = "felt_items")
data class FeltItem(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val material: String,
    val quantity: Int,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    val post: Post
)
