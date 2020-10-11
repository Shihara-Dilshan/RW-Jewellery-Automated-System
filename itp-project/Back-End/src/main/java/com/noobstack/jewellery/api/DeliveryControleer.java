package com.noobstack.jewellery.api;
import com.noobstack.jewellery.model.DeliverBoy;
import com.noobstack.jewellery.model.Delivery;
import com.noobstack.jewellery.repository.DeliverRepository;
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
    private final DeliverRepository deliverRepository;
    public DeliveryControleer(DeliveryService deliveryService, DeliverRepository deliverRepository) {
        super();
        this.deliveryService = deliveryService;

        this.deliverRepository = deliverRepository;
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
    @RequestMapping("/delivery/deliveryByStatus/{status}/{status2}")
    List<Delivery> getDeliveryByTwoStatus(@PathVariable("status") String status,@PathVariable("status2") String status2){
        return this.deliveryService.getdeliveryByTwoStatus(status,status2); }
    @RequestMapping("/delivery/{status}/{deliverBoy}")
    List<Delivery> getDeliverBoyAndStatus(@PathVariable("status")String status,@PathVariable("deliverBoy")DeliverBoy deliveryBoy){
        return this.deliveryService.getDeliverBoyAndStatus(status,deliveryBoy); }
    @RequestMapping("/delivery/deliverycustomer/{customerid}/{status}")
    List<Delivery> getDeliveryBycustomerid(@PathVariable("customerid")String customerid,@PathVariable("status")String status){
        return this.deliveryService.getdeliveryBycustomerid(customerid,status);}
    @RequestMapping("/delivery/Report/{deliverBoy}/{status}/{deliveredTime}")
    List<Delivery> getDeliveryBydate(@PathVariable("deliverBoy")DeliverBoy deliverBoy,@PathVariable("status")String status,@PathVariable("deliveredTime")String deliveredTime){
        return this.deliveryService.getdeliveryBydate(deliverBoy,status,deliveredTime);}
    @GetMapping("/alldelivery")
    List<Delivery> getAlldeliveries(){
        return this.deliveryService.getAlldeliveries();
    }
    @GetMapping("/alldrivers")
    List<DeliverBoy> getAllDeliveryDrivers(){
        return this.deliveryService.getAlldeliverdrivers();
    }

    @PostMapping( "AssignDriver/{deliveryID}")
    public Delivery AssignDriver(@PathVariable("deliveryID") UUID id, @RequestBody Delivery delivery) {
        return deliveryService.AssignDriver(id, delivery);
    }
    @PostMapping("/RequestDelivery")
    ResponseEntity<Delivery> RequestDelivery(@Validated @RequestBody Delivery delivery) throws URISyntaxException {
        return this.deliveryService.RequestDelivery(delivery); }
    @DeleteMapping("/deletedelivery/{id}")
    ResponseEntity<?> deleteDelivery(@PathVariable UUID id){
        return this.deliveryService.deletedelivery(id);
    }

    @PutMapping( "updatestatus/{deliveryID}")
    public Delivery updateDeliveryStatus(@PathVariable("deliveryID") UUID id, @RequestBody Delivery delivery) {
        return deliveryService.updateStatus(id, delivery);
    }
}
