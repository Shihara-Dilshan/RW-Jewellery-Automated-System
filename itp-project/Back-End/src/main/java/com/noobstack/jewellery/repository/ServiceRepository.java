package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ServiceRepository extends JpaRepository<Service, UUID> {
}
