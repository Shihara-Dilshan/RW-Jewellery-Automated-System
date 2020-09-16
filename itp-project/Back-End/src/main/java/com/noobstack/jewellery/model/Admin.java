package com.noobstack.jewellery.model;

import javax.persistence.*;

@Entity
public class Admin extends Employee{

    private String active;
    private String password;
    private String roles;
    private String uname;

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

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "active='" + active + '\'' +
                ", password='" + password + '\'' +
                ", roles='" + roles + '\'' +
                ", uname='" + uname + '\'' +
                '}';
    }
}