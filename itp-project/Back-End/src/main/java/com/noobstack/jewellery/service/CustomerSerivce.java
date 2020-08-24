package com.noobstack.jewellery.service;

import com.noobstack.jewellery.model.Customer;
import com.noobstack.jewellery.model.Design;
import com.noobstack.jewellery.repository.customerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CustomerSerivce {
    private final customerRepository customerRepo;

    @Autowired
    public CustomerSerivce(customerRepository customerRepo) {
        this.customerRepo = customerRepo;
    }

    public List<Customer> getAllCustomers(){
        return this.customerRepo.findAll();
    }

    public ResponseEntity<?> getCustomerById(UUID id){
        Optional<Customer> design = this.customerRepo.findById(id);
        return design.map( response ->
                ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<Customer> addNewCustomer(Customer customer) throws URISyntaxException {
        Customer result = this.customerRepo.save(customer);
        return ResponseEntity.created(new URI("/designs/addnew" + result.getCustomer_id())).body(result);
    }


}
