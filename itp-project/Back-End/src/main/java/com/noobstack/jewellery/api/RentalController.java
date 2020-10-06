package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.CustomerRentals;
import com.noobstack.jewellery.model.DeliverBoy;
import com.noobstack.jewellery.model.Delivery;
import com.noobstack.jewellery.model.Sellable;
import com.noobstack.jewellery.repository.CustomerRentalRepository;
import com.noobstack.jewellery.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
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
//    @GetMapping(path = "/findrental/{status}")
//    List<CustomerRentals> findbyStatus(@PathVariable("status") String status){
//        return this.rentalService.catchstatus(status);
//    }

    //update status
//    @PutMapping( "/updatestatus/{id}")
//    public CustomerRentals updateStatus(@PathVariable UUID id, @RequestBody CustomerRentals customerRentals) {
//        return rentalService.updateStatus(id, customerRentals);
//    }




}
