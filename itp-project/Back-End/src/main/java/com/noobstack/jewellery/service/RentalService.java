package com.noobstack.jewellery.service;

import com.noobstack.jewellery.model.CustomerRentals;
import com.noobstack.jewellery.model.Delivery;
import com.noobstack.jewellery.model.Rental;
import com.noobstack.jewellery.repository.CustomerRentalRepository;
import com.noobstack.jewellery.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RentalService {

    private final CustomerRentalRepository customerRentalRepository;
    private final RentalRepository rentalRepository;

    @Autowired
    public RentalService(CustomerRentalRepository customerRentalRepository, RentalRepository rentalRepository) {
        this.customerRentalRepository = customerRentalRepository;

        this.rentalRepository = rentalRepository;
    }
    //add new rentals to customer rental table
    public ResponseEntity<CustomerRentals> addNewRental(CustomerRentals customerRentals) throws URISyntaxException {
        CustomerRentals result = this.customerRentalRepository.save(customerRentals);
        return ResponseEntity.created(new URI("/sendRental" + result.getId())).body(result);
    }

    //retrieve all the details
    public List<CustomerRentals> getAllRentals(){
        return this.customerRentalRepository.findAll();
    }

    //retrieve specific rental
    public ResponseEntity<?> getRentalByid(UUID id) {
        Optional<CustomerRentals> customerRentals = this.customerRentalRepository.findById(id);
        return customerRentals.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

//    //retrieve rental price*no of days= Total Amount to be paid, firstname,lastname,nic
//    public List<CustomerRentals> catchstatus(String status){
//        return customerRentalRepository.findbyStatus(status);
//    }


//    //update status
//    public CustomerRentals updateStatus(UUID id,CustomerRentals customerRentals) {
//        customerRentals.setId(id);
//        return customerRentalRepository.save(customerRentals);
//    }

}
