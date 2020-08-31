package com.noobstack.jewellery.model;

import javax.persistence.Entity;

@Entity
public class Repair extends Service{

    private String damagetype;
    private String repairType;

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

    @Override
    public String toString() {
        return "Repair{" +
                "damagetype='" + damagetype + '\'' +
                ", repairType='" + repairType + '\'' +
                '}';
    }
}
