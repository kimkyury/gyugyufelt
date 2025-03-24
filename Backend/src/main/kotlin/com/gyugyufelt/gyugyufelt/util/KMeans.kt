package com.gyugyufelt.gyugyufelt.util;

import kotlin.math.pow
import kotlin.math.sqrt
import kotlin.random.Random

data class Cluster(
    val center: FloatArray,
    val points: MutableList<FloatArray> = mutableListOf(),
    var count: Int = 0
)

object KMeans {

    fun fit(pixels: List<FloatArray>, k: Int, maxIterations: Int = 10): List<Cluster> {
        // 1. 초기 중심값 k개 선택
        val centers = pixels.shuffled().take(k).map { it.copyOf() }
        val clusters = centers.map { Cluster(it) }

        repeat(maxIterations) {
            // 각 클러스터 포인트 초기화
            clusters.forEach {
                it.points.clear()
                it.count = 0
            }

            // 2. 각 픽셀을 가장 가까운 클러스터에 할당
            for (pixel in pixels) {
                val cluster = clusters.minByOrNull { euclideanDistance(it.center, pixel) }!!
                cluster.points.add(pixel)
                cluster.count += 1
            }

            // 3. 클러스터 중심 업데이트
            clusters.forEach { cluster ->
                if (cluster.points.isNotEmpty()) {
                    for (i in cluster.center.indices) {
                        cluster.center[i] = cluster.points.map { it[i] }.average().toFloat()
                    }
                }
            }
        }

        return clusters
    }

    private fun euclideanDistance(a: FloatArray, b: FloatArray): Float {
        return sqrt(a.zip(b).sumOf { (ai, bi) -> (ai - bi).toDouble().pow(2) }).toFloat()
    }
}