package com.noobstack.jewellery.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "expense")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotNull
    private UUID id;
    private Instant expenseDate;
    private String description;
    @ManyToOne
    private Category category;
    @ManyToOne
    private User user;

    public Expense() {
        //for spring boot
    }

    public Expense(Instant expenseDate, String description, Category category, User user) {
        this.id = UUID.randomUUID();
        this.expenseDate = expenseDate;
        this.description = description;
        this.category = category;
        this.user = user;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Instant getExpenseDate() {
        return this.expenseDate;
    }

    public void setExpenseDate(Instant expenseDate) {
        this.expenseDate = expenseDate;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return this.category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Expense{" +
                "id=" + id +
                ", expenseDate=" + expenseDate +
                ", description='" + description + '\'' +
                ", category=" + category +
                ", user=" + user +
                '}';
    }
}
