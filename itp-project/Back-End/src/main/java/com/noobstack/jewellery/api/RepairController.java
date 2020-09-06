package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.Design;
import com.noobstack.jewellery.model.Repair;
import com.noobstack.jewellery.service.DesignService;
import com.noobstack.jewellery.service.RepairService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v2")
public class RepairController {
    private RepairService repairService;

    @Autowired
    public RepairController(RepairService repairService) {
        this.repairService = repairService;
    }

    @GetMapping("/repairs")
    List<Repair> getAllRepairs(){
        return this.repairService.getAllRepairs();
    }

    @GetMapping("/repairs/{id}")
    ResponseEntity<?> getRepairById(@PathVariable UUID id){
        return this.repairService.getRepairById(id);
    }

    @PostMapping("/repairs/addnew")
    ResponseEntity<Repair> addNewRepair(@Validated @RequestBody Repair repair) throws URISyntaxException {
        return this.repairService.addNewRepair(repair);
    }

    @PutMapping("/repairs/update/{id}")
    ResponseEntity<Repair> updateRepair(@Validated @RequestBody Repair repair){
        return this.repairService.updateRepair(repair);
    }

    @DeleteMapping("/repairs/delete/{id}")
    ResponseEntity<?> deleteRepair(@PathVariable UUID id){
        return this.repairService.deleteRepair(id);
    }
}
