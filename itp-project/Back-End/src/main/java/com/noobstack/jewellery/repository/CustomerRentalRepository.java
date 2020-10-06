package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Customer;
import com.noobstack.jewellery.model.CustomerRentals;
import com.noobstack.jewellery.model.Delivery;
import com.noobstack.jewellery.model.Sellable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CustomerRentalRepository extends JpaRepository<CustomerRentals, UUID> {
//
//    @Query("SELECT cr FROM customer_rentals cr WHERE cr.status = ?1")
//    List<CustomerRentals> findbyStatus(String status);

}
