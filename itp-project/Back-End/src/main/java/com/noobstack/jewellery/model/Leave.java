package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Entity
public class Leave {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID leave_id;
    private LocalDate leaveFrom;
    private LocalDate leaveTo;
    private String reason;

    @ManyToOne
    private Employee employee;

    public Leave() {
    }

    public Leave(LocalDate leaveFrom, LocalDate leaveTo, String reason, Employee employee) {
        this.leaveFrom = leaveFrom;
        this.leaveTo = leaveTo;
        this.reason = reason;
        this.employee = employee;
    }

    public UUID getLeave_id() {
        return leave_id;
    }

    public void setLeave_id(UUID leave_id) {
        this.leave_id = leave_id;
    }

    public LocalDate getLeaveFrom() {
        return leaveFrom;
    }

    public void setLeaveFrom(LocalDate leaveFrom) {
        this.leaveFrom = leaveFrom;
    }

    public LocalDate getLeaveTo() {
        return leaveTo;
    }

    public void setLeaveTo(LocalDate leaveTo) {
        this.leaveTo = leaveTo;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public String toString() {
        return "Leave{" +
                "leave_id=" + leave_id +
                ", leaveFrom=" + leaveFrom +
                ", leaveTo=" + leaveTo +
                ", reason='" + reason + '\'' +
                ", employee=" + employee +
                '}';
    }
}
