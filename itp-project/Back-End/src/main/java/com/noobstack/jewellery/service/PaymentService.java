package com.noobstack.jewellery.service;

import com.noobstack.jewellery.model.Payment;
import com.noobstack.jewellery.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;

    @Autowired
    public PaymentService( PaymentRepository paymentRepository) {this.paymentRepository = paymentRepository;}

    public List<Payment> getAllPayments() {return this.paymentRepository.findAll();}

    public ResponseEntity<?> getPaymentById(UUID id) {
        Optional<Payment> order =this.paymentRepository.findById(id);
        return order.map(response ->
                ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<Payment> addNewPayment(Payment payment) throws URISyntaxException{
        Payment result = this.paymentRepository.save(payment);
        return ResponseEntity.created(new URI("/sendPayment" + result.getPayment_id())).body(result);
    }


    public ResponseEntity<?> deletePayment(UUID id) {
        paymentRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    public List<Payment> getPaymentByPaymentStatus(String paymentstatus) {
        return paymentRepository.findByPaymentstatus(paymentstatus);
    }

    public ResponseEntity<Payment> updatePayment(Payment payment) {
        Payment result = this.paymentRepository.save(payment);
        return ResponseEntity.ok().body(result);
    }



}
