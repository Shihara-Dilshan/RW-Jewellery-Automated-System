package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Admin;
import com.noobstack.jewellery.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface AdminRepository extends JpaRepository<Admin,UUID> {
    Optional<Admin> findByUname(String uname);
}
