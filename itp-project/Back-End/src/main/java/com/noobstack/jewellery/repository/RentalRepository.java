package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Rental;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RentalRepository extends JpaRepository<Rental, UUID> {
}
