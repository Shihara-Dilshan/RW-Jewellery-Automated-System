package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Entity
public class Record {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID leave_id;
    private String loginTime;
    private String activityTime;
    private String activity;

    @ManyToOne
    private Admin admin;

    public Record() {
    }

    public Record(UUID leave_id, String loginTime, String activityTime, String activity, Admin admin) {
        this.leave_id = leave_id;
        this.loginTime = loginTime;
        this.activityTime = activityTime;
        this.activity = activity;
        this.admin = admin;
    }

    public UUID getLeave_id() {
        return leave_id;
    }

    public void setLeave_id(UUID leave_id) {
        this.leave_id = leave_id;
    }

    public String getLoginTime() {
        return loginTime;
    }

    public void setLoginTime(String loginTime) {
        this.loginTime = loginTime;
    }

    public String getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(String activityTime) {
        this.activityTime = activityTime;
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
                ", loginTime='" + loginTime + '\'' +
                ", activityTime='" + activityTime + '\'' +
                ", activity='" + activity + '\'' +
                ", admin=" + admin +
                '}';
    }
}
