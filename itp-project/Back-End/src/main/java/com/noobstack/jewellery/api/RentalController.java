package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.*;
import com.noobstack.jewellery.repository.CustomerRentalRepository;
import com.noobstack.jewellery.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v2/rentalcus")
public class RentalController {

    private final RentalService rentalService;

    @Autowired

    public RentalController(RentalService rentalService) {
        this.rentalService = rentalService;
    }
//add new rental
    @PostMapping("/sendRental")
    ResponseEntity<CustomerRentals> addNewRental(@Validated @RequestBody CustomerRentals customerRentals) throws URISyntaxException {
        return this.rentalService.addNewRental(customerRentals);
    }

//retrieve all rentals
    @GetMapping("/allrentals")
    List<CustomerRentals> getAllRentals() {
        return this.rentalService.getAllRentals();
    }

//retrieve specific rental by given id
    @GetMapping("/rentalById/{id}")
    ResponseEntity<?> getRentalByid(@PathVariable UUID id){
        return this.rentalService.getRentalByid(id);
    }

//retrieve specific data - customer firstname,lastname,nic,total amount

    @GetMapping(path = "/findrental/{id}")
    List<CustomerRentals> findDay(@PathVariable("id") UUID id){
        return this.rentalService.findById(id);
    }

   // update method
   @PutMapping( "/updaterstatus/{id}")
   public CustomerRentals updateRentalStatus(@PathVariable("id") UUID id, @RequestBody CustomerRentals customerRentals) {
      return rentalService.updateStatus(id, customerRentals);
   }

   //delete
   @DeleteMapping("/deleterental/{id}")
   ResponseEntity<?> deleteRental(@PathVariable UUID id){
       return this.rentalService.deleteCustomerRentals(id);
   }

    @GetMapping("/allrentaldetails")
    List<Rental> getAllRentalsdetails() {
        return this.rentalService.getAllRentaldetails();
    }


    @GetMapping("/rentalsByDate/{d1}/{d2}")
    List<CustomerRentals> findByRentalFromBetween(@PathVariable("d1") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate, @PathVariable("d2") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate ){
        return this.rentalService.findByRentalFromBetween(startDate,endDate);
    }
    //retrieve specific jewelry by given id
    @GetMapping("/jewelById/{id}")
    ResponseEntity<?> getJewelryByid(@PathVariable UUID id){
        return this.rentalService.getJewelryByid(id);
    }


}
