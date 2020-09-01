package com.noobstack.jewellery.service;

import com.noobstack.jewellery.model.Payment;
import com.noobstack.jewellery.model.Sellable;
import com.noobstack.jewellery.repository.SellableRepository;
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
public class SellableService {

    private final SellableRepository sellableRepository;

    @Autowired
    public SellableService (SellableRepository sellableRepository){this.sellableRepository = sellableRepository;}

    public List<Sellable> getAllSellable() {return this.sellableRepository.findAll();}

    public ResponseEntity<?> getSellableById(UUID id) {
        Optional<Sellable> order =this.sellableRepository.findById(id);
        return order.map(response ->
                ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<Sellable> addNewSellable(Sellable sellable) throws URISyntaxException{
        Sellable result = this.sellableRepository.save(sellable);
        return ResponseEntity.created(new URI("/sendSellable" + result.getJewellery_id())).body(result);
    }


    public ResponseEntity<Sellable> updateSellableJew(Sellable sellable) {
        Sellable result = this.sellableRepository.save(sellable);
        return ResponseEntity.ok().body(result);
    }
}
