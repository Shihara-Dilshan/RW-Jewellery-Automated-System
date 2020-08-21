package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.util.Set;
import java.util.UUID;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID customer_id;
    private String name;
    private String lastName;
    private String telephone;
    private String address;
    private String NIC;

    @ManyToMany
    private Set<Service> service;

    public Customer() {
    }

    public Customer(String name, String lastName, String telephone, String address, String NIC, Set<Service> service) {
        this.name = name;
        this.lastName = lastName;
        this.telephone = telephone;
        this.address = address;
        this.NIC = NIC;
        this.service = service;
    }

    public UUID getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(UUID customer_id) {
        this.customer_id = customer_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getNIC() {
        return NIC;
    }

    public void setNIC(String NIC) {
        this.NIC = NIC;
    }

    public Set<Service> getService() {
        return service;
    }

    public void setService(Set<Service> service) {
        this.service = service;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customer_id=" + customer_id +
                ", name='" + name + '\'' +
                ", lastName='" + lastName + '\'' +
                ", telephone='" + telephone + '\'' +
                ", address='" + address + '\'' +
                ", NIC='" + NIC + '\'' +
                ", service=" + service +
                '}';
    }
}
