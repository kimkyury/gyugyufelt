package com.gyugyufelt.gyugyufelt.service;


import com.gyugyufelt.gyugyufelt.dto.ColorResult.ColorResult
import com.gyugyufelt.gyugyufelt.util.ColorExtractor
import java.awt.image.BufferedImage;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import javax.imageio.ImageIO

@Service
public class ImageService {

    val k =5

    fun extractColors(file:MultipartFile): List<ColorResult>{
        val image:BufferedImage = ImageIO.read(file.inputStream)

        return ColorExtractor.getDominantColors(image, k);


    }
}
