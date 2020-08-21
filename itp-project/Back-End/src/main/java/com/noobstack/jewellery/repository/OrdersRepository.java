package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OrdersRepository extends JpaRepository<Orders, UUID> {
    Orders findByRecipe(String recipe);
}
