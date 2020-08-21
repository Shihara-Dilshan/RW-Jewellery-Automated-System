package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SupplierRepository extends JpaRepository<Supplier, UUID> {
    Supplier findByName(String name);
}
