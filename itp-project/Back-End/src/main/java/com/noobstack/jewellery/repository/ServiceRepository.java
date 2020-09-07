package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Customer;
import com.noobstack.jewellery.model.Sellable;
import com.noobstack.jewellery.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ServiceRepository extends JpaRepository<Service, UUID> {
    Optional<Service> findByCustomer(Customer customer);
}
