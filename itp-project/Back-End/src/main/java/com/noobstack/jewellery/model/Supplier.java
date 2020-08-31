package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.util.Set;
import java.util.UUID;

@Entity
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID supp_id;
    private String name;
    private String address;
    private String companyName;
    private String telephone;
    private String status;
    private String category;
    private String email;


    public Supplier() {
    }

    public Supplier(String name, String address, String companyName, String telephone, String status, String category, String email) {
        this.name = name;
        this.address = address;
        this.companyName = companyName;
        this.telephone = telephone;
        this.status = status;
        this.category = category;
        this.email = email;
    }

    public UUID getSupp_id() {
        return supp_id;
    }

    public void setSupp_id(UUID supp_id) {
        this.supp_id = supp_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Supplier{" +
                "supp_id=" + supp_id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", companyName='" + companyName + '\'' +
                ", telephone='" + telephone + '\'' +
                ", status='" + status + '\'' +
                ", category='" + category + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
