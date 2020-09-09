package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.Customer;
import com.noobstack.jewellery.model.Design;
import com.noobstack.jewellery.model.Service;
import com.noobstack.jewellery.service.DesignService;
import com.noobstack.jewellery.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v2")
public class ServiceController {
    private ServiceService serviceService;

    @Autowired
    public ServiceController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }

    @GetMapping("/services")
    List<com.noobstack.jewellery.model.Service> getAllServices(){
        return this.serviceService.getAllServices();
    }

    @GetMapping("/services/{id}")
    ResponseEntity<?> getServiceById(@PathVariable UUID id){
        return this.serviceService.getServiceById(id);
    }

    @PostMapping("/services/addnew")
    ResponseEntity<com.noobstack.jewellery.model.Service> addNewService(@Validated @RequestBody Service service) throws URISyntaxException {
        return this.serviceService.addNewService(service);
    }

    @PutMapping("/services/update/{id}")
    ResponseEntity<com.noobstack.jewellery.model.Service> updateSerice(@Validated @RequestBody Service service){
        return this.serviceService.updateSerice(service);
    }

    @DeleteMapping("/services/delete/{id}")
    ResponseEntity<?> deleteService(@PathVariable UUID id){
        return this.serviceService.deleteService(id);
    }
}
