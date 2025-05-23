package com.gyugyufelt.gyugyufelt.controller;

import com.gyugyufelt.gyugyufelt.dto.ColorResult
import com.gyugyufelt.gyugyufelt.service.ImageService
import io.swagger.v3.oas.annotations.Operation
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/image")
 class ImageController(private val imageService: ImageService ) {

     @Operation(summary="이미지 내 대표 색상 추출", description = "이미지를 받아 5개의 대표 색상을 추출합니다.")
     @PostMapping("/upload", consumes = [MediaType.MULTIPART_FORM_DATA_VALUE])
    fun uploadImage(@RequestPart image:MultipartFile) : ResponseEntity<List<ColorResult>>{
        val result = imageService.extractColors(image)
            return ResponseEntity.ok(result)
    }
}
