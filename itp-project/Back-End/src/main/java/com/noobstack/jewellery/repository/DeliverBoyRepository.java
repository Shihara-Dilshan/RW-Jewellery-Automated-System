package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.DeliverBoy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface DeliverBoyRepository extends JpaRepository<DeliverBoy, UUID> {
    List<DeliverBoy> findByUsername(String username);
}
