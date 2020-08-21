package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Jewellery {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID jewellery_id;
    private String name;
    private String description;
    private String category;
    private String material;
    private String image_url;
    private Double supplyPrice;

    @ManyToOne
    private Supplier supplier;

    public Jewellery() {
    }

    public Jewellery(String name, String description, String category, String material, String image_url, Double supplyPrice, Supplier supplier) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.material = material;
        this.image_url = image_url;
        this.supplyPrice = supplyPrice;
        this.supplier = supplier;
    }

    public UUID getJewellery_id() {
        return jewellery_id;
    }

    public void setJewellery_id(UUID jewellery_id) {
        this.jewellery_id = jewellery_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public Double getSupplyPrice() {
        return supplyPrice;
    }

    public void setSupplyPrice(Double supplyPrice) {
        this.supplyPrice = supplyPrice;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    @Override
    public String toString() {
        return "Jewellery{" +
                "jewellery_id=" + jewellery_id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", material='" + material + '\'' +
                ", image_url='" + image_url + '\'' +
                ", supplyPrice=" + supplyPrice +
                ", supplier=" + supplier +
                '}';
    }
}
