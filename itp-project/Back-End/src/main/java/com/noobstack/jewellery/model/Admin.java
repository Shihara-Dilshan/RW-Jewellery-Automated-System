package com.noobstack.jewellery.model;

import javax.persistence.*;

@Entity
public class Admin extends Employee{

    private String active;
    private String password;
    private String roles;
    private String username;

    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public String getUser_name() {
        return username;
    }

    public void setUser_name(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "active='" + active + '\'' +
                ", password='" + password + '\'' +
                ", roles='" + roles + '\'' +
                ", user_name='" + username + '\'' +
                '}';
    }
}