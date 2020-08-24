package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.Customer;
import com.noobstack.jewellery.service.CustomerSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v2/customer")
public class CustomerController {

    private final CustomerSerivce customerSerivce;

    @Autowired
    public CustomerController(CustomerSerivce customerSerivce) {
        this.customerSerivce = customerSerivce;
    }

    @GetMapping("/all")
    List<Customer> getAllCustomers(){
        return this.customerSerivce.getAllCustomers();
    }

    @GetMapping("/{id}")
    ResponseEntity<?> getCustomerById(@PathVariable UUID id){
        return this.customerSerivce.getCustomerById(id);
    }

    @PostMapping("/register")
    ResponseEntity<Customer> addNewCustomer(@Validated @RequestBody Customer customer) throws URISyntaxException {
        return this.customerSerivce.addNewCustomer(customer);
    }

}
