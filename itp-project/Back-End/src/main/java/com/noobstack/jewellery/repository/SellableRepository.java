package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Customer;
import com.noobstack.jewellery.model.Sellable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface SellableRepository extends JpaRepository<Sellable, UUID> {
    Optional<Sellable> findByCustomer(Customer customer);
}
