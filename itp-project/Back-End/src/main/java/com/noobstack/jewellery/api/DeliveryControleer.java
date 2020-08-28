package com.noobstack.jewellery.api;
import com.noobstack.jewellery.model.DeliverBoy;
import com.noobstack.jewellery.model.Delivery;
import com.noobstack.jewellery.service.DeliveryService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.net.URISyntaxException;
import java.util.List;
import java.util.UUID;
@RestController
@RequestMapping("/api")
public class DeliveryControleer {
    private final DeliveryService deliveryService;
    public DeliveryControleer(DeliveryService deliveryService) {
        super();
        this.deliveryService = deliveryService;
    }
    @GetMapping("/deliverybyid/{id}")
    ResponseEntity<?> getDeliveryByID(@PathVariable UUID id){
        return this.deliveryService.getdeliveryByid(id);
    }
    @GetMapping("/delivery/deliveryBoy/{deliverBoy}")
    List<Delivery> getDeliveryByDeliveryBoy(@PathVariable DeliverBoy deliverBoy){
        return this.deliveryService.getdeliveryByDeliveryBoy(deliverBoy); }
    @RequestMapping("/delivery/deliveryStatus/{status}")
    List<Delivery> getDeliveryByStatus(@PathVariable String status){
        return this.deliveryService.getdeliveryByStatus(status); }
    @GetMapping("/alldelivery")
    List<Delivery> getAlldeliveries(){
        return this.deliveryService.getAlldeliveries();
    }
    @GetMapping("/alldrivers")
    List<DeliverBoy> getAllDeliveryDrivers(){
        return this.deliveryService.getAlldeliverdrivers();
    }
    @PostMapping("/RequestDelivery")
    ResponseEntity<Delivery> RequestDelivery(@Validated @RequestBody Delivery delivery) throws URISyntaxException {
        return this.deliveryService.RequestDelivery(delivery); }
    @DeleteMapping("/deletedelivery/{id}")
    ResponseEntity<?> deleteDelivery(@PathVariable UUID id){
        return this.deliveryService.deletedelivery(id);
    }


}
