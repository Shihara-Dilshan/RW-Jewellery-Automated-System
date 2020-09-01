package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Entity
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID delivery_id;
    private String deliveryAddress;
    private String deliveryCity;
    private LocalDate requestedTime;
    private LocalDate deliveredTime;
    private String status;

    @ManyToOne
    private DeliverBoy deliverBoy;

    public Delivery() {
    }

    public Delivery(String deliveryAddress, String deliveryCity, LocalDate requestedTime, LocalDate deliveredTime, String status, DeliverBoy deliverBoy) {
        this.deliveryAddress = deliveryAddress;
        this.deliveryCity = deliveryCity;
        this.requestedTime = requestedTime;
        this.deliveredTime = deliveredTime;
        this.status = status;
        this.deliverBoy = deliverBoy;
    }

    public UUID getDelivery_id() {
        return delivery_id;
    }

    public void setDelivery_id(UUID delivery_id) {
        this.delivery_id = delivery_id;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public String getDeliveryCity() {
        return deliveryCity;
    }

    public void setDeliveryCity(String deliveryCity) {
        this.deliveryCity = deliveryCity;
    }

    public LocalDate getRequestedTime() {
        return requestedTime;
    }

    public void setRequestedTime(LocalDate requestedTime) {
        this.requestedTime = requestedTime;
    }

    public LocalDate getDeliveredTime() {
        return deliveredTime;
    }

    public void setDeliveredTime(LocalDate deliveredTime) {
        this.deliveredTime = deliveredTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public DeliverBoy getDeliverBoy() {
        return deliverBoy;
    }

    public void setDeliverBoy(DeliverBoy deliverBoy) {
        this.deliverBoy = deliverBoy;
    }

    @Override
    public String toString() {
        return "Delivery{" +
                "delivery_id=" + delivery_id +
                ", deliveryAddress='" + deliveryAddress + '\'' +
                ", deliveryCity='" + deliveryCity + '\'' +
                ", requestedTime=" + requestedTime +
                ", deliveredTime=" + deliveredTime +
                ", status='" + status + '\'' +
                ", deliverBoy=" + deliverBoy +
                '}';
    }
}
