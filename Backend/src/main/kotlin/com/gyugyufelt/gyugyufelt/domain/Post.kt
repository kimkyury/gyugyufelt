package com.gyugyufelt.gyugyufelt.domain

import jakarta.persistence.*

@Entity
@Table(name = "posts")
data class Post(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    val title: String,
    val content: String,

    @Enumerated(EnumType.ORDINAL)
    val level: DifficultyLevel, // DB 에는 정수가 저장되도록

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    val user: User,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "felt_model_id")
    val feltModel: FeltModel
)

enum class DifficultyLevel {
    EASY, MEDIUM, HARD
}

