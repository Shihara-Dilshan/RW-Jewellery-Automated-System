package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Make;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.UUID;

public interface makeRepository extends JpaRepository<Make, UUID> {
    Make findByStatus(String status);
}
