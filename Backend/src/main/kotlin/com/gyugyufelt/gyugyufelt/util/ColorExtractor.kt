package com.gyugyufelt.gyugyufelt.util

import com.gyugyufelt.gyugyufelt.dto.ColorResult
import java.awt.Color

import java.awt.image.BufferedImage


object ColorExtractor{

    /***
     * K-means
     */
    fun getDominantColors(image: BufferedImage, k: Int): List<ColorResult> {
        val pixels = mutableListOf<FloatArray>()

        for (x in 0 until image.width) {
            for (y in 0 until image.height) {
                val color = Color(image.getRGB(x, y))
                pixels.add(floatArrayOf(color.red.toFloat(), color.green.toFloat(), color.blue.toFloat()))
            }
        }

        val clusters = KMeans.fit(pixels, k)  // KMeans 구현 필요
        val totalPixels = pixels.size.toDouble()

        return clusters.map {
            val color = Color(it.center[0].toInt(), it.center[1].toInt(), it.center[2].toInt())
            ColorResult(
                hex = "#%02x%02x%02x".format(color.red, color.green, color.blue),
                ratio = "%.2f".format(it.count / totalPixels * 100).toDouble()
            )
        }
    }

}