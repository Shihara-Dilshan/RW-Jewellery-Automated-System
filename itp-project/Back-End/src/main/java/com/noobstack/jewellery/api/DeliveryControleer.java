package com.noobstack.jewellery.api;


import com.noobstack.jewellery.model.Delivery;
import com.noobstack.jewellery.service.DeliveryService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class DeliveryControleer {
    private final DeliveryService deliveryService;

    public DeliveryControleer(DeliveryService deliveryService) {
        super();
        this.deliveryService = deliveryService;
    }

    @GetMapping("/alldelivery")
    List<Delivery> getAlldeliveries(){
        return this.deliveryService.getAlldeliveries();
    }

    @PostMapping("/RequestDelivery")
    ResponseEntity<Delivery> RequestDelivery(@Validated @RequestBody Delivery delivery) throws URISyntaxException {
        return this.deliveryService.RequestDelivery(delivery);
    }
}
