package com.gyugyufelt.gyugyufelt.service

import com.gyugyufelt.gyugyufelt.repository.WoolItemRepository
import org.springframework.stereotype.Service

@Service
class WoolItemService(val repo: WoolItemRepository) {

    fun getAll() = repo.findAll()
}