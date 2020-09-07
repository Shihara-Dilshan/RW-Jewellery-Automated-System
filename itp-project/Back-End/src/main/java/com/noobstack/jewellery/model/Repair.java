package com.noobstack.jewellery.model;

import javax.persistence.Entity;

@Entity
public class Repair extends Service{

    private String itemName;
    private String damagetype;
    private String repairType;
    private String currentPrice;
    private String description;

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getDamagetype() {
        return damagetype;
    }

    public void setDamagetype(String damagetype) {
        this.damagetype = damagetype;
    }

    public String getRepairType() {
        return repairType;
    }

    public void setRepairType(String repairType) {
        this.repairType = repairType;
    }

    public String getCurrentPrice() {
        return currentPrice;
    }

    public void setCurrentPrice(String currentPrice) {
        this.currentPrice = currentPrice;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Repair{" +
                "itemName='" + itemName + '\'' +
                ", damagetype='" + damagetype + '\'' +
                ", repairType='" + repairType + '\'' +
                ", currentPrice='" + currentPrice + '\'' +
                ", desc='" + description + '\'' +
                '}';
    }
}
