package com.noobstack.jewellery.model;

import javax.persistence.Entity;

@Entity
public class Rental extends Jewellery{
    private double rentalprice;

    public double getRentalprice() {
        return rentalprice;
    }

    public void setRentalprice(double rentalprice) {
        this.rentalprice = rentalprice;
    }

    @Override
    public String toString() {
        return "Rental{" +
                "rentalprice=" + rentalprice +
                '}';
    }
}
