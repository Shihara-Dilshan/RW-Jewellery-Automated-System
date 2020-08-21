package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Make;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface makeRepository extends JpaRepository<Make, UUID> {
    Make findByStatus(String status);
}
