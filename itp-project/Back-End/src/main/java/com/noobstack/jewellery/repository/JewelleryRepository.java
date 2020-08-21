package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Jewellery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface JewelleryRepository extends JpaRepository<Jewellery, UUID> {
    Jewellery findByName(String name);
}
