package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface DeliverRepository extends JpaRepository<Delivery, UUID> {
    Delivery findByStatus(String status);
}
