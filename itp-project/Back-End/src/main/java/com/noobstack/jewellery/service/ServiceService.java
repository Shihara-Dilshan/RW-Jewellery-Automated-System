package com.noobstack.jewellery.service;

import com.noobstack.jewellery.repository.ServiceRepository;
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
public class ServiceService {
    private ServiceRepository serviceRepository;

    @Autowired
    public ServiceService(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    public List<com.noobstack.jewellery.model.Service> getAllServices(){
        return this.serviceRepository.findAll();
    }

    public ResponseEntity<?> getServiceById(UUID id){
        Optional<com.noobstack.jewellery.model.Service> service = this.serviceRepository.findById(id);
        return service.map( response ->
                ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<com.noobstack.jewellery.model.Service> addNewService(com.noobstack.jewellery.model.Service service) throws URISyntaxException {
        com.noobstack.jewellery.model.Service result = this.serviceRepository.save(service);
        return ResponseEntity.created(new URI("/services/addnew" + result.getService_id())).body(result);
    }

    public ResponseEntity<com.noobstack.jewellery.model.Service> updateSerice(com.noobstack.jewellery.model.Service service){
        com.noobstack.jewellery.model.Service result = this.serviceRepository.save(service);
        return ResponseEntity.ok().body(result);
    }

    public ResponseEntity<?> deleteService(UUID id){
        this.serviceRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
