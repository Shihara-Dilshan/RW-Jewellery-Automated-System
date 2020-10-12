package com.noobstack.jewellery.service;

import com.noobstack.jewellery.model.*;
import com.noobstack.jewellery.repository.CustomerRentalRepository;
import com.noobstack.jewellery.repository.JewelleryRepository;
import com.noobstack.jewellery.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RentalService {

    private final CustomerRentalRepository customerRentalRepository;
    private final RentalRepository rentalRepository;
    private final JewelleryRepository jewelleryRepository;

    @Autowired
    public RentalService(CustomerRentalRepository customerRentalRepository, RentalRepository rentalRepository, JewelleryRepository jewelleryRepository) {
        this.customerRentalRepository = customerRentalRepository;
        this.rentalRepository = rentalRepository;
        this.jewelleryRepository = jewelleryRepository;
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
    public List<CustomerRentals> findById(UUID id){
        return customerRentalRepository.findDate();
    }



    //update status
    public CustomerRentals updateStatus(UUID id, CustomerRentals customerRentals) {
        customerRentals.setId(id);
        return customerRentalRepository.save(customerRentals);
    }

    //delete
//    public ResponseEntity<?> deleteRental(UUID id){
//        rentalRepository.deleteById(id);
//        return ResponseEntity.ok().build();
//    }
    public ResponseEntity<?> deleteCustomerRentals(UUID id){
        customerRentalRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    //retrieve all the details
    public List<Rental> getAllRentaldetails(){
        return this.rentalRepository.findAll();
    }


    public List<CustomerRentals> findByRentalFromBetween(LocalDate startDate, LocalDate endDate) {
        return customerRentalRepository.findByDate(startDate, endDate);
    }


    //retrieve jewelry using specific id
    public ResponseEntity<?> getJewelryByid(UUID id) {
        Optional<Jewellery> jewellery = this.jewelleryRepository.findById(id);
        return jewellery.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
//    public List<Jewellery> getJewelryByid(UUID id) {
//        Optional<Jewellery> jewellery = this.jewelleryRepository.findById(id);
//        return jewellery.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }

}
