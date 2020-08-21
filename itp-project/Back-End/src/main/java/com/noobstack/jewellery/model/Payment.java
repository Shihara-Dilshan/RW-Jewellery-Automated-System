package com.noobstack.jewellery.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;
import java.util.UUID;

@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID payment_id;
    private Double amount;
    private String paymentstatus;
    private LocalDate paymentDate;

    public Payment() {
    }

    public Payment(Double amount, String paymentstatus, LocalDate paymentDate) {
        this.amount = amount;
        this.paymentstatus = paymentstatus;
        this.paymentDate = paymentDate;
    }

    public UUID getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(UUID payment_id) {
        this.payment_id = payment_id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getPaymentstatus() {
        return paymentstatus;
    }

    public void setPaymentstatus(String paymentstatus) {
        this.paymentstatus = paymentstatus;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "payment_id=" + payment_id +
                ", amount=" + amount +
                ", paymentstatus='" + paymentstatus + '\'' +
                ", paymentDate=" + paymentDate +
                '}';
    }
}
