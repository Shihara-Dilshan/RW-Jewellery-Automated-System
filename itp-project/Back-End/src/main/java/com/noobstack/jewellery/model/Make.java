package com.noobstack.jewellery.model;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Make extends Service {
    private String status;
    private double weight;
    private double price;

    @ManyToOne
    private Design design;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Design getDesign() {
        return design;
    }

    public void setDesign(Design design) {
        this.design = design;
    }

    @Override
    public String toString() {
        return "Make{" +
                "status='" + status + '\'' +
                ", weight=" + weight +
                ", price=" + price +
                ", design=" + design +
                '}';
    }
}
