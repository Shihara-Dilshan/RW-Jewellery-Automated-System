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

    public Service() {
    }

    public Service(String jewellerytype, String imageUrl) {
        this.jewellerytype = jewellerytype;
        this.imageUrl = imageUrl;
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

    @Override
    public String toString() {
        return "Service{" +
                "service_id=" + service_id +
                ", jewellerytype='" + jewellerytype + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
