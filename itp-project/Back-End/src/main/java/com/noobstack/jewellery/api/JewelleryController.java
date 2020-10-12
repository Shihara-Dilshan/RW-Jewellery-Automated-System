package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.Jewellery;
import com.noobstack.jewellery.repository.JewelleryRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:5000")
@RestController
@RequestMapping("/api/v2")
public class JewelleryController {

    @Autowired
    private JewelleryRepository jewelleryRepository;

    // get all employees
    @GetMapping("/jewellery")
    public List<Jewellery> getAllJewellery(){
        return jewelleryRepository.findAll();
    }

    // create employee rest api
    @PostMapping("/jewellery")
    public Jewellery createJewellery(@RequestBody Jewellery jewellery) {
        return jewelleryRepository.save(jewellery);
    }

    // get jewellery by id rest api
    @GetMapping("/jewellery/{id}")
    public ResponseEntity<Jewellery> getJewelleryById(@PathVariable UUID id) {
        Jewellery jewellery = jewelleryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("jewellery not exist with id :" + id));
        return ResponseEntity.ok(jewellery);
    }

    // update jewellery rest api

    @PutMapping("/jewellery/{id}")
    public ResponseEntity<Jewellery> updateJewellery(@PathVariable UUID id, @RequestBody Jewellery jewelleryDetails){
        Jewellery jewellery = jewelleryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("jewellery not exist with id :" + id));

        jewellery.setName(jewelleryDetails.getName());
        jewellery.setMaterial(jewelleryDetails.getMaterial());
        jewellery.setSupplyPrice(jewelleryDetails.getSupplyPrice());

        Jewellery updatedJewellery = jewelleryRepository.save(jewellery);
        return ResponseEntity.ok(updatedJewellery);
    }

    // delete jewellery rest api
    @DeleteMapping("/jewellery/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable UUID id){
        Jewellery jewellery = jewelleryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("jewellery not exist with id :" + id));

        jewelleryRepository.delete(jewellery);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

/*
    private final JewelleryService jewelleryService;

    @Autowired
    public JewelleryController(JewelleryService jewelleryService) {
        this.jewelleryService = jewelleryService;
    }

    //retrieve all jewelries
    @GetMapping("/jewellery")
    List<Jewellery> getAllJewelry() {
        return this.jewelleryService.getAllJewelry();
    }
*/
    /*
    @Autowired
    private JewelleryRepository jewelleryRepository;

    // get all jewellery
    @GetMapping("/jewellery")
    public List<Jewellery> getAllJewellery(){
        return jewelleryRepository.findAll();
    }

    // create jewellery rest api
    @PostMapping("/jewellery")
    public Jewellery createJewellery(@RequestBody Jewellery jewellery) {
        return jewelleryRepository.save(jewellery);
    }

    // get jewellery by id rest api
    @GetMapping("/jewellery/{id}")
    public ResponseEntity<Jewellery> getJewelleryById(@PathVariable UUID id) {
        Jewellery jewellery = jewelleryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("jewellery not exist with id :" + id));
        return ResponseEntity.ok(jewellery);
    }




    */

}
