package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
    Category findByName(String name);

}
