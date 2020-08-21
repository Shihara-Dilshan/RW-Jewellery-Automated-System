package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PaymentRepository extends JpaRepository<Payment, UUID> {
    Payment findByPaymentstatus(String paymentstatus);
}
