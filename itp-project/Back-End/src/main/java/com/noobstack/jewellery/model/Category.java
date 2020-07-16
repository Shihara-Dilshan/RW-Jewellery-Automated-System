package com.noobstack.jewellery.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotNull
    private UUID id;
    @NotNull
    private String name;

    public Category() {
        //for spring boot
    }

    public Category(String name) {
        this.id = UUID.randomUUID();
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
