package com.noobstack.jewellery.service;
import com.noobstack.jewellery.model.DeliverBoy;
import com.noobstack.jewellery.model.Delivery;
import com.noobstack.jewellery.repository.DeliverBoyRepository;
import com.noobstack.jewellery.repository.DeliverRepository;
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
public class DeliveryService {
    private final DeliverRepository deliverRepository;
    private final DeliverBoyRepository deliverBoyRepository;
    @Autowired
    public DeliveryService(DeliverRepository deliverRepository, DeliverBoyRepository deliverBoyRepository) {
        this.deliverRepository = deliverRepository;
        this.deliverBoyRepository = deliverBoyRepository;
    }
    public ResponseEntity<Delivery> RequestDelivery(Delivery delivery) throws URISyntaxException {
        Delivery Result = deliverRepository.save(delivery);
        return ResponseEntity.created(new URI("/api/RequestDelivery" + Result.getDelivery_id())).body(Result);
    }
    public List<Delivery> getAlldeliveries()
    {
        return this.deliverRepository.findAll();
    }
    public List<DeliverBoy> getAlldeliverdrivers() {
        return this.deliverBoyRepository.findAll();
    }
    public ResponseEntity<?> getdeliveryByid(UUID id) {
        Optional<Delivery> delivery = this.deliverRepository.findById(id);
        return delivery.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    public List<Delivery> getdeliveryByDeliveryBoy(DeliverBoy deliverBoy) {
        return deliverRepository.findByDeliverBoy(deliverBoy);
    }
    public List<Delivery> getdeliveryByStatus(String status) {
        return deliverRepository.findByStatus(status);
    }
    public ResponseEntity<?> deletedelivery(UUID id){
        deliverRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    public Delivery updateStatus(UUID id,Delivery delivery) {
        delivery.setDelivery_id(id);
        return deliverRepository.save(delivery);
    }
    public Delivery AssignDriver(UUID id,Delivery delivery) {
        delivery.setDelivery_id(id);
        return deliverRepository.save(delivery);
    }


}
