package com.noobstack.jewellery.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Jewellery {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID jewellery_id;
    private String name;
    private String material;
    private String image_url;
    private Double supplyPrice;

    @ManyToOne
    @NotNull
    private Supplier supplier;

    @OneToOne
    @NotNull
    @JoinColumn(name = "category_id", referencedColumnName = "categoryId")
    private Category category;

    public Jewellery() {
    }

    public Jewellery(UUID jewellery_id, String name, String material, String image_url, Double supplyPrice, Supplier supplier, Category category) {
        this.jewellery_id = jewellery_id;
        this.name = name;
        this.material = material;
        this.image_url = image_url;
        this.supplyPrice = supplyPrice;
        this.supplier = supplier;
        this.category = category;
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Jewellery{" +
                "jewellery_id=" + jewellery_id +
                ", name='" + name + '\'' +
                ", material='" + material + '\'' +
                ", image_url='" + image_url + '\'' +
                ", supplyPrice=" + supplyPrice +
                ", supplier=" + supplier +
                ", category=" + category +
                '}';
    }
}
