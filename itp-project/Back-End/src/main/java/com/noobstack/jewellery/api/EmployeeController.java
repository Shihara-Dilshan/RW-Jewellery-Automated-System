package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.Employee;
import com.noobstack.jewellery.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/apiEmpolyee")
public class EmployeeController {
    private final EmployeeService employeeSerivce;

    @Autowired
    public EmployeeController(EmployeeService employeeSerivce) {
        this.employeeSerivce = employeeSerivce;
    }

    @GetMapping("/allemployees")
    List<Employee> getAllEmployees(){
        return this.employeeSerivce.getAllEmployees();
    }

    @GetMapping("/employee/{id}")
    ResponseEntity<?> getEmployeeById(@PathVariable("id") UUID id){
        return this.employeeSerivce.getEmployeeById(id);
    }

    @GetMapping(path="/findemployee/{name}")
    List<Employee> findByName(@PathVariable("name") String name){
        return this.employeeSerivce.findByName(name);
    }

}
