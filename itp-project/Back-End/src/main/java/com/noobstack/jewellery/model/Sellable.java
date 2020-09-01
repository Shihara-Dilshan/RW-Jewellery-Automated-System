package com.noobstack.jewellery.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;


@Entity
public class Sellable extends Jewellery{
    private double sellprice;

    @ManyToOne
    private Customer customer;

    public double getSellprice() {
        return sellprice;
    }

    public void setSellprice(double sellprice) {
        this.sellprice = sellprice;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "Sellable{" +
                "sellprice=" + sellprice +
                ", customer=" + customer +
                '}';
    }
}
