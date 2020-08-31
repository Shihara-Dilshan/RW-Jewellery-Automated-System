package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Entity
public class Record {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID leave_id;
    private LocalDate loginTime;
    private LocalDate logoutTime;
    private String activity;

    @ManyToOne
    private Admin admin;

    public Record() {
    }

    public Record(LocalDate loginTime, LocalDate logoutTime, String activity, Admin admin) {
        this.loginTime = loginTime;
        this.logoutTime = logoutTime;
        this.activity = activity;
        this.admin = admin;
    }

    public UUID getLeave_id() {
        return leave_id;
    }

    public void setLeave_id(UUID leave_id) {
        this.leave_id = leave_id;
    }

    public LocalDate getLoginTime() {
        return loginTime;
    }

    public void setLoginTime(LocalDate loginTime) {
        this.loginTime = loginTime;
    }

    public LocalDate getLogoutTime() {
        return logoutTime;
    }

    public void setLogoutTime(LocalDate logoutTime) {
        this.logoutTime = logoutTime;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    @Override
    public String toString() {
        return "Record{" +
                "leave_id=" + leave_id +
                ", loginTime=" + loginTime +
                ", logoutTime=" + logoutTime +
                ", activity='" + activity + '\'' +
                ", admin=" + admin +
                '}';
    }
}
