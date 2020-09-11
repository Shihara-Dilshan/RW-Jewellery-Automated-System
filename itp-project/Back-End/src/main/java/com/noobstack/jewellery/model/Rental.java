package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.util.Set;


@Entity
public class Rental extends Jewellery{
    private double rentalPrice;

    public double getRentalPrice() {
        return rentalPrice;
    }

    public void setRentalPrice(double rentalPrice) {
        this.rentalPrice = rentalPrice;
    }

    @Override
    public String toString() {
        return "Rental{" +
                "rentalPrice=" + rentalPrice +
                '}';
    }
}
