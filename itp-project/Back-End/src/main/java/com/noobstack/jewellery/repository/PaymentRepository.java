package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PaymentRepository extends JpaRepository<Payment, UUID> {
    List<Payment> findByPaymentstatus(String paymentstatus);
}
