package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface customerRepository extends JpaRepository<Customer, UUID> {
    Optional<Customer> findByName(String name);
}
