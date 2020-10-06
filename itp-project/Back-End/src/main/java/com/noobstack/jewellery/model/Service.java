package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID service_id;
    private String jewellerytype;
    private String imageUrl;
    private String localDateTime;
    private String isEditable;

    @ManyToOne
    private Customer customer;

    public Service() {
    }

    public Service(UUID service_id, String jewellerytype, String imageUrl, String localDateTime, String isEditable, Customer customer) {
        this.service_id = service_id;
        this.jewellerytype = jewellerytype;
        this.imageUrl = imageUrl;
        this.localDateTime = localDateTime;
        this.isEditable = isEditable;
        this.customer = customer;
    }

    public UUID getService_id() {
        return service_id;
    }

    public void setService_id(UUID service_id) {
        this.service_id = service_id;
    }

    public String getJewellerytype() {
        return jewellerytype;
    }

    public void setJewellerytype(String jewellerytype) {
        this.jewellerytype = jewellerytype;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(String localDateTime) {
        this.localDateTime = localDateTime;
    }

    public String getIsEditable() {
        return isEditable;
    }

    public void setIsEditable(String isEditable) {
        this.isEditable = isEditable;
    }

    @Override
    public String toString() {
        return "Service{" +
                "service_id=" + service_id +
                ", jewellerytype='" + jewellerytype + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", localDateTime='" + localDateTime + '\'' +
                ", isEditable='" + isEditable + '\'' +
                ", customer=" + customer +
                '}';
    }
}
