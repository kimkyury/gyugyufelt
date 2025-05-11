package com.gyugyufelt.gyugyufelt.domain

import jakarta.persistence.*

@Entity
@Table(name = "favorite_posts")
data class FavoritePost(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    val user: User,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    val post: Post
)