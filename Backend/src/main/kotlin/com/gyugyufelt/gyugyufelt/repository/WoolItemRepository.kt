package com.gyugyufelt.gyugyufelt.repository

import com.gyugyufelt.gyugyufelt.domain.WoolItem
import org.springframework.data.jpa.repository.JpaRepository

interface WoolItemRepository : JpaRepository<WoolItem, Long>