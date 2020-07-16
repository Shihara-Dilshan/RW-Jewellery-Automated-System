package com.noobstack.jewellery.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotNull
    private UUID id;
    private String name;
    private String email;
    @OneToMany
    private Set<Category> categories;


    public User() {
        //default constructor for Spring
    }

    public User(String name, String email) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.email = email;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", categories=" + categories +
                '}';
    }
}
