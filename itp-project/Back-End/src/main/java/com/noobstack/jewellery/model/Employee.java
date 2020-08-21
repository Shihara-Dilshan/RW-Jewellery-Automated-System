package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID emp_id;
    private String position;
    private String NIC;
    private String fname;
    private String lName;


    public Employee() {
    }

    public Employee(UUID emp_id, String position, String NIC, String fname, String lName) {
        this.emp_id = emp_id;
        this.position = position;
        this.NIC = NIC;
        this.fname = fname;
        this.lName = lName;
    }

    public UUID getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(UUID emp_id) {
        this.emp_id = emp_id;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getNIC() {
        return NIC;
    }

    public void setNIC(String NIC) {
        this.NIC = NIC;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "emp_id=" + emp_id +
                ", position='" + position + '\'' +
                ", NIC='" + NIC + '\'' +
                ", fname='" + fname + '\'' +
                ", lName='" + lName + '\'' +
                '}';
    }
}
