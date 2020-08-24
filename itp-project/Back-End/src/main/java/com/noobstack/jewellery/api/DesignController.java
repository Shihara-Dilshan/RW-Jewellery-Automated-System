package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.Design;
import com.noobstack.jewellery.service.DesignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v2")
public class DesignController {
    private DesignService designService;

    @Autowired
    public DesignController(DesignService designService) {
        this.designService = designService;
    }

    @GetMapping("/designs")
    List<Design> getAllDesigns(){
        return this.designService.getAllDesigns();
    }

    @GetMapping("/designs/{id}")
    ResponseEntity<?> getDesignById(@PathVariable UUID id){
        return this.designService.getDesignById(id);
    }

    @PostMapping("/designs/addnew")
    ResponseEntity<Design> addNewDesign(@Validated @RequestBody Design design) throws URISyntaxException {
        return this.designService.addNewDesign(design);
    }

    @PutMapping("/designs/update/{id}")
    ResponseEntity<Design> updateDesign(@Validated @RequestBody Design design){
        return this.designService.updateDesign(design);
    }

    @DeleteMapping("/designs/delete/{id}")
    ResponseEntity<?> deleteDesign(@PathVariable UUID id){
        return this.designService.deleteDesign(id);
    }

}
