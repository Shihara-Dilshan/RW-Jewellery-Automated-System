package com.noobstack.jewellery.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
public class CustomerRentals {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Rental rental;

    private LocalDate rentalDate;
    private LocalDate returnDate;

    private String status;

    public float getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(float totalAmount) {
        this.totalAmount = totalAmount;
    }

    private float totalAmount;

    public CustomerRentals() {
    }

    public CustomerRentals(Customer customer, Rental rental, LocalDate rentalDate, LocalDate returnDate, String status) {
        this.customer = customer;
        this.rental = rental;
        this.rentalDate = rentalDate;
        this.returnDate = returnDate;
        this.status = status;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Rental getRental() {
        return rental;
    }

    public void setRental(Rental rental) {
        this.rental = rental;
    }

    public LocalDate getRentalDate() {
        return rentalDate;
    }

    public void setRentalDate(LocalDate rentalDate) {
        this.rentalDate = rentalDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "CustomerRentals{" +
                "id=" + id +
                ", customer=" + customer +
                ", rental=" + rental +
                ", rentalDate=" + rentalDate +
                ", returnDate=" + returnDate +
                ", status='" + status + '\'' +
                ", TotalAmount='"+ totalAmount +
                '}';
    }

}
