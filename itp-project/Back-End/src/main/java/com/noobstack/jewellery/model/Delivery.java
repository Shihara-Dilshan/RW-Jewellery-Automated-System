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
    private String requestedTime;
    private String deliveredTime;
    private String status;
    private String distance;
    private String deliveryProvince;
    private String phoneNumber;
    private String district;
    private String customerid;

    @ManyToOne
    private DeliverBoy deliverBoy;

    public Delivery() {
    }

    public Delivery(String deliveryAddress, String deliveryCity, String requestedTime, String deliveredTime, String status, DeliverBoy deliverBoy , String distance, String deliveryProvince, String phoneNumber, String district ,String customerid) {
        this.deliveryAddress = deliveryAddress;
        this.deliveryCity = deliveryCity;
        this.requestedTime = requestedTime;
        this.deliveredTime = deliveredTime;
        this.status = status;
        this.deliverBoy = deliverBoy;
        this.distance = distance;
        this.deliveryProvince = deliveryProvince;
        this.phoneNumber= phoneNumber;
        this.district=district;
        this.customerid=customerid;

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

    public String getRequestedTime() {
        return requestedTime;
    }

    public void setRequestedTime(String requestedTime) {
        this.requestedTime = requestedTime;
    }

    public String getDeliveredTime() {
        return deliveredTime;
    }

    public void setDeliveredTime(String deliveredTime) {
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

    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }

    public String getDeliveryProvince() {
        return deliveryProvince;
    }

    public void setDeliveryProvince(String deliveryProvince) {
        this.deliveryProvince = deliveryProvince;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCustomerid() {
        return customerid;
    }

    public void setCustomerid(String customerid) {
        this.customerid = customerid;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    @Override
    public String toString() {
        return "Delivery{" +
                "delivery_id=" + delivery_id +
                ", deliveryAddress='" + deliveryAddress + '\'' +
                ", deliveryCity='" + deliveryCity + '\'' +
                ", requestedTime='" + requestedTime + '\'' +
                ", deliveredTime='" + deliveredTime + '\'' +
                ", status='" + status + '\'' +
                ", distance='" + distance + '\'' +
                ", deliveryProvince='" + deliveryProvince + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", district='" + district + '\'' +
                ", customerid='" + customerid + '\'' +
                ", deliverBoy=" + deliverBoy +
                '}';
    }
}