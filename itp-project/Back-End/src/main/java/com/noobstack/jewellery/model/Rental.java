package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;


@Entity
public class Rental extends Jewellery{
    private double rentalPrice;
    private LocalDateTime localDateTime;

    @ManyToMany
    private List<Customer> customerList;

    public double getRentalPrice() {
        return rentalPrice;
    }

    public void setRentalPrice(double rentalPrice) {
        this.rentalPrice = rentalPrice;
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }

    public List<Customer> getCustomerList() {
        return customerList;
    }

    public void setCustomerList(List<Customer> customerList) {
        this.customerList = customerList;
    }

    @Override
    public String toString() {
        return "Rental{" +
                "rentalPrice=" + rentalPrice +
                ", localDateTime=" + localDateTime +
                ", customerList=" + customerList +
                '}';
    }
}
