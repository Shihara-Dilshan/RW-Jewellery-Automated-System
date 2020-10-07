package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.Admin;
import com.noobstack.jewellery.model.Customer;
import com.noobstack.jewellery.service.AdminService;
import com.noobstack.jewellery.service.CustomerSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v2/admin")
public class AdminController {
    private final AdminService adminSerivce;

    @Autowired
    public AdminController(AdminService adminSerivce) {
        this.adminSerivce = adminSerivce;
    }

    @GetMapping("/all")
    List<Admin> getAllAdmins(){
        return this.adminSerivce.getAllAdmins();
    }

    @GetMapping("/specificid/{id}")
    ResponseEntity<?> getAdminById(@PathVariable UUID id){
        return this.adminSerivce.getAdminById(id);
    }

    @GetMapping("/specificname/{uname}")
    ResponseEntity<?> getAdminByName(@PathVariable String uname){
        return this.adminSerivce.getAdminByName(uname);
    }

    @PostMapping("/register")
    ResponseEntity<Admin> addNewAdmin(@Validated @RequestBody Admin admin) throws URISyntaxException {
        return this.adminSerivce.addNewAdmin(admin);
    }

    @PutMapping("/update/{id}")
    ResponseEntity<Admin> updateAdmin(@Validated @RequestBody Admin admin){
        return this.adminSerivce.updateAdmin(admin);
    }


}
