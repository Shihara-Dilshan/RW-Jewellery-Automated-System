package com.noobstack.jewellery.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID customer_id;
    @NotNull
    private String name;
    private String firstName;
    private String lastName;
    private String telephone;
    private String address;
    private String NIC;
    private String PWord;

    public Customer() {
    }

    public Customer(UUID customer_id, String name, String firstName, String lastName, String telephone, String address, String NIC, String PWord) {
        this.customer_id = customer_id;
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.telephone = telephone;
        this.address = address;
        this.NIC = NIC;
        this.PWord = PWord;
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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
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

    public String getPWord() {
        return PWord;
    }

    public void setPWord(String PWord) {
        this.PWord = PWord;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customer_id=" + customer_id +
                ", name='" + name + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", telephone='" + telephone + '\'' +
                ", address='" + address + '\'' +
                ", NIC='" + NIC + '\'' +
                ", PWord='" + PWord + '\'' +
                '}';
    }
}
