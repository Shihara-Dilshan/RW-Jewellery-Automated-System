package com.noobstack.jewellery.service;

import com.noobstack.jewellery.model.Design;
import com.noobstack.jewellery.repository.DesignRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class DesignService {
    private DesignRepository designRepository;

    @Autowired
    public DesignService(DesignRepository designRepository) {
        this.designRepository = designRepository;
    }

    public List<Design> getAllDesigns(){
        return this.designRepository.findAll();
    }

    public ResponseEntity<?> getDesignById(UUID id){
        Optional<Design> design = this.designRepository.findById(id);
        return design.map( response ->
            ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
