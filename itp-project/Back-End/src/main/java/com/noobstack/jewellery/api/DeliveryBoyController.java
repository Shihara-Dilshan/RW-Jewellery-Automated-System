package com.noobstack.jewellery.api;
import com.noobstack.jewellery.model.DeliverBoy;
import com.noobstack.jewellery.service.DeliveryBoyService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/api")
public class DeliveryBoyController {
    private final DeliveryBoyService deliveryBoyService;
    public DeliveryBoyController(DeliveryBoyService deliveryBoyService) {
        super();
        this.deliveryBoyService = deliveryBoyService;
    }
    @GetMapping("/deliveryBoy/deliveryBoyUsername/{username}")
    List<DeliverBoy>getdeliveryBoyByName(@PathVariable String username){
        return  this.deliveryBoyService.getdeliveryBoyByName(username);
    }


}
