package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Record;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RecordRepository extends JpaRepository<Record, UUID> {
    Record findByActivity(String activity);
}
