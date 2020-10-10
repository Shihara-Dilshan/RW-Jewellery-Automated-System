package com.noobstack.jewellery.api;

import com.noobstack.jewellery.IMonthlyLeave;
import com.noobstack.jewellery.model.Employee;
import com.noobstack.jewellery.model.Leave;
import com.noobstack.jewellery.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/apiLeave")
public class LeaveController {
    private final LeaveService leaveService;

    @Autowired
    public LeaveController(LeaveService leaveService) {

        this.leaveService = leaveService;
    }

    @GetMapping("/allemployeeLeave")
    List<Leave> getAllLeave(){

        return this.leaveService.getAllLeave();
    }

    @GetMapping("/leave/{id}")
    ResponseEntity<?> getLeaveById(@PathVariable("id") UUID id){
        return this.leaveService.getLeaveById(id);
    }

    @GetMapping("/empleave/{employee}")
    List<Leave> getLeaveByEmployee(@PathVariable Employee employee){
        return this.leaveService.getLeaveByEmployee(employee);
    }

    @PostMapping("/newLeave")
    ResponseEntity<Leave> addNewLeave(@RequestBody Leave leave) throws URISyntaxException {
        return this.leaveService.applyLeave(leave);
    }
    @DeleteMapping("/deleteLeave/{id}")
    ResponseEntity<?> deleteLeave(@PathVariable UUID id){
        return this.leaveService.deleteLeave(id);
    }
    @PutMapping("/updateLeave/{id}")
    public Leave updateLeaveDetails(@PathVariable UUID id, @RequestBody Leave leave){
        return leaveService.updateLeave(id, leave);
    }

    @GetMapping("/le/{id}/{d1}/{d2}")
    List<Leave> findByDate(@PathVariable("id") UUID id, @PathVariable("d1") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate, @PathVariable("d2") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)   LocalDate endDate ){
        return this.leaveService.findByDate(id,startDate,endDate);
    }

    @GetMapping("/sum/{d1}/{d2}")
    List<IMonthlyLeave> getSum(@PathVariable("d1") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate, @PathVariable("d2") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)   LocalDate endDate){
        return this.leaveService.getSum(startDate,endDate);
    }

    @GetMapping("/recentLeave/{d1}/{d2}")
    List<Leave> findByLeaveFromBetween(@PathVariable("d1") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,@PathVariable("d2") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate ){
        return this.leaveService.findByLeaveFromBetween(startDate,endDate);
    }
    @GetMapping("/sumWithID/{d1}/{d2}/{id}")
    List<IMonthlyLeave> getSumWithId(@PathVariable("d1") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate, @PathVariable("d2") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)   LocalDate endDate, @PathVariable("id") UUID id){
        return this.leaveService.getSumWithID(startDate,endDate, id);
    }

}
