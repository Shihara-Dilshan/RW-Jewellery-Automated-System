package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CategoryRepository extends JpaRepository<Category, UUID> {
    Category findByName(String name);

}
