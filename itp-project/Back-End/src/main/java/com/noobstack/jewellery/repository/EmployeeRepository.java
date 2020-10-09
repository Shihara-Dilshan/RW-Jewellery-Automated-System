package com.noobstack.jewellery.repository;

import com.noobstack.jewellery.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface EmployeeRepository extends JpaRepository<Employee, UUID> {
    Employee findByFname(String fname);
    List<Employee> findByFnameStartsWithIgnoreCase(String name);
}
