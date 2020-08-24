package com.noobstack.jewellery.service;

import com.noobstack.jewellery.model.Delivery;
import com.noobstack.jewellery.repository.DeliverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@Service
public class DeliveryService {
    private final DeliverRepository deliverRepository;

    @Autowired
    public DeliveryService(DeliverRepository deliverRepository) {
        this.deliverRepository = deliverRepository;
    }
    public ResponseEntity<Delivery> RequestDelivery(Delivery delivery) throws URISyntaxException {
        Delivery Result = deliverRepository.save(delivery);
        return ResponseEntity.created(new URI("/api/RequestDelivery" + Result.getDelivery_id())).body(Result);
    }

    public List<Delivery> getAlldeliveries(){
        return this.deliverRepository.findAll();
    }

}
