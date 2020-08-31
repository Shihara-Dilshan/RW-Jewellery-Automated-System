package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Repair;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RepaiRepository extends JpaRepository<Repair, UUID> {
    Repair findByDamagetype(String damagetype);
}
