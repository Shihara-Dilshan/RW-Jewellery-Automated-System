package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Delivery;
import com.noobstack.jewellery.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface OrdersRepository extends JpaRepository<Orders, UUID> {
    List<Orders> findByRecipe(String recipe);
    List<Orders> findBydelivery(Delivery delivery);
}