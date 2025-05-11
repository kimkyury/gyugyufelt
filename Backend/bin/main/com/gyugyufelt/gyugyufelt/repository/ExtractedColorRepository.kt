package com.gyugyufelt.gyugyufelt.repository

import com.gyugyufelt.gyugyufelt.domain.ExtractedColor
import org.springframework.data.jpa.repository.JpaRepository

interface ExtractedColorRepository : JpaRepository<ExtractedColor, Long>{
}
