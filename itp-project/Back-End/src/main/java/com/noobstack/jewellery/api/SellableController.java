package com.noobstack.jewellery.api;


import com.noobstack.jewellery.model.Sellable;
import com.noobstack.jewellery.service.SellableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v2/sellable")
public class SellableController {

    private final SellableService sellableService;

    @Autowired
    public SellableController (SellableService sellableService){this.sellableService=sellableService;}

    @GetMapping("/allSellable")
    List<Sellable> getAllSellable() {return this.sellableService.getAllSellable();}

    @GetMapping
    ResponseEntity<?> getSellableById(@PathVariable UUID id) {return this.sellableService.getSellableById(id);}

    @PostMapping("/sendSellable")
    ResponseEntity<Sellable> addNewSellable(@Validated @RequestBody Sellable sellable) throws URISyntaxException{
        return this.sellableService.addNewSellable(sellable);
    }

    @PutMapping("/updateSellable/{id}")
    ResponseEntity<Sellable> updateSellableJew(@RequestBody Sellable sellable){
        return this.sellableService.updateSellableJew(sellable);
    }

}
