package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.Make;
import com.noobstack.jewellery.service.MakeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v2")
public class MakeController {
    private MakeService makeService;

    @Autowired
    public MakeController(MakeService makeService) {
        this.makeService = makeService;
    }

    @GetMapping("/makeservices")
    public List<Make> getAllMakeServices(){
        return this.makeService.getAllMakeServices();
    }

    @GetMapping("/makeservice/{id}")
    ResponseEntity<?> getMakeServicesById(@PathVariable UUID id){
        return this.makeService.getMakeServicesById(id);
    }

    @PostMapping("/makeservice")
    ResponseEntity<Make> addNewService(@Validated @RequestBody Make make) throws URISyntaxException {
        return this.makeService.addNewService(make);
    }

    @PutMapping("/makeservice/update/{id}")
    ResponseEntity<Make> updateMakeService(@Validated @RequestBody Make make){
        return this.makeService.updateMakeService(make);
    }

    @DeleteMapping("/makeservice/delete/{id}")
    ResponseEntity<?> deleteMakeService(@PathVariable UUID id){
        return this.makeService.deleteMakeService(id);
    }




}
