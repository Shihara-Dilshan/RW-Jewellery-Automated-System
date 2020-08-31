package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.DeliverBoy;
import com.noobstack.jewellery.model.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface DeliverRepository extends JpaRepository<Delivery, UUID> {
    List<Delivery> findByDeliverBoy(DeliverBoy deliverBoy);
    List<Delivery> findByStatus(String status);
}
