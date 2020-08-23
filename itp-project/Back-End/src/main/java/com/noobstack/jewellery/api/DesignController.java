package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.Design;
import com.noobstack.jewellery.service.DesignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
