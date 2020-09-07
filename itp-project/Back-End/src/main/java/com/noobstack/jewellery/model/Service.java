package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID service_id;
    private String jewellerytype;
    private String imageUrl;

    @ManyToOne
    private Customer customer;

    public Service() {
    }

    public Service(UUID service_id, String jewellerytype, String imageUrl, Customer customer) {
        this.service_id = service_id;
        this.jewellerytype = jewellerytype;
        this.imageUrl = imageUrl;
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

    @Override
    public String toString() {
        return "Service{" +
                "service_id=" + service_id +
                ", jewellerytype='" + jewellerytype + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", customer=" + customer +
                '}';
    }
}
