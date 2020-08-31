package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Admin;
import com.noobstack.jewellery.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AdminRepository extends JpaRepository<Admin,UUID> {
    Admin findByUsername(String username);
}
