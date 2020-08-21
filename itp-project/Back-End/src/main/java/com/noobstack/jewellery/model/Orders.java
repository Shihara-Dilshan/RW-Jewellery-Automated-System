package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID o_id;
    private String recipe;

    @OneToOne
    private Delivery delivery;

    @OneToOne
    private Payment payment;

    @OneToOne
    private Sellable sellable;

    public Orders() {
    }

    public Orders(String recipe, Delivery delivery, Payment payment, Sellable sellable) {
        this.recipe = recipe;
        this.delivery = delivery;
        this.payment = payment;
        this.sellable = sellable;
    }

    public UUID getO_id() {
        return o_id;
    }

    public void setO_id(UUID o_id) {
        this.o_id = o_id;
    }

    public String getRecipe() {
        return recipe;
    }

    public void setRecipe(String recipe) {
        this.recipe = recipe;
    }

    public Delivery getDelivery() {
        return delivery;
    }

    public void setDelivery(Delivery delivery) {
        this.delivery = delivery;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public Sellable getSellable() {
        return sellable;
    }

    public void setSellable(Sellable sellable) {
        this.sellable = sellable;
    }

    @Override
    public String toString() {
        return "Orders{" +
                "o_id=" + o_id +
                ", recipe='" + recipe + '\'' +
                ", delivery=" + delivery +
                ", payment=" + payment +
                ", sellable=" + sellable +
                '}';
    }
}
