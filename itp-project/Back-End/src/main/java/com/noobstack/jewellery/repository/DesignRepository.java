package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Design;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface DesignRepository extends JpaRepository<Design, UUID> {
    Design findByName(String name);
}
