package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Leave;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface LeaveRepository extends JpaRepository<Leave, UUID> {
    Leave findByReason(String reason);
}
