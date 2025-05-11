package com.gyugyufelt.gyugyufelt.controller

import com.gyugyufelt.gyugyufelt.domain.WoolItem
import com.gyugyufelt.gyugyufelt.repository.WoolItemRepository
import com.gyugyufelt.gyugyufelt.service.WoolItemService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/wool-items")
class WoolItemController(
    val service: WoolItemService
) {

    @GetMapping
    fun list(): List<WoolItem> = service.getAll()
}