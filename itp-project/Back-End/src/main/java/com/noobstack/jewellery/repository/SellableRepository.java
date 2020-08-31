package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Sellable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SellableRepository extends JpaRepository<Sellable, UUID> {
    Sellable findBySellprice(double sellprice);
}
