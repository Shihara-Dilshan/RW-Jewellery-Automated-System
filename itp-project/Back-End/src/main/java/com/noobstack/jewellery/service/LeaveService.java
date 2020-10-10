package com.noobstack.jewellery.service;

import com.noobstack.jewellery.IMonthlyLeave;
import com.noobstack.jewellery.model.Employee;
import com.noobstack.jewellery.model.Leave;
import com.noobstack.jewellery.repository.EmployeeRepository;
import com.noobstack.jewellery.repository.LeaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class LeaveService {
    private final LeaveRepository leaveRepository;
    private final EmployeeRepository employeeRepository;

    @Autowired
    public LeaveService(LeaveRepository leaveRepository, EmployeeRepository employeeRepository) {
        this.leaveRepository = leaveRepository;
        this.employeeRepository = employeeRepository;
    }
    //get the list of all applied leave
    public List<Leave> getAllLeave(){
        return this.leaveRepository.findAll();
    }
    //get the list of all employees
    public List<Employee> getAllEmployees(){
        return this.employeeRepository.findAll();
    }
    //get a leave
    public ResponseEntity<?> getLeaveById(UUID id){
        Optional<Leave> leave = this.leaveRepository.findById(id);
        return leave.map(response -> ResponseEntity
                .ok()
                .body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    // get leave by employee
    public List<Leave> getLeaveByEmployee(Employee employee){
        return leaveRepository.findByEmployee(employee);
    }

    //apply new leave
    public ResponseEntity<Leave> applyLeave(Leave leave) throws URISyntaxException {
        Leave newLeave = this.leaveRepository.save(leave);
        return ResponseEntity.created(new URI("/apiLeave/new"+newLeave.getLeave_id())).body(newLeave);

    }
    //delete leave
    public ResponseEntity<?> deleteLeave(UUID id){
        leaveRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    //edit leave details
    public Leave updateLeave(UUID id, Leave leave) {
        leave.setLeave_id(id);
        return leaveRepository.save(leave);
    }

    public List<Leave> findByDate(UUID id, LocalDate startDate, LocalDate endDate) {
        return leaveRepository.findByDate(id, startDate, endDate);
    }

    public List<IMonthlyLeave> getSum(LocalDate startDate, LocalDate endDate) {
        return leaveRepository.getSum(startDate, endDate);
    }

    public List<IMonthlyLeave> getSumWithID(LocalDate startDate, LocalDate endDate, UUID id) {
        return leaveRepository.getSumWithId(startDate, endDate, id);
    }

    public List<Leave> findByLeaveFromBetween(LocalDate startDate, LocalDate endDate) {
        return leaveRepository.findByLeaveBetween(startDate, endDate);
    }

}
