package com.noobstack.jewellery.api;

import com.noobstack.jewellery.model.Orders;
import com.noobstack.jewellery.service.OrderService;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {this.orderService = orderService;}

    @GetMapping("/allOrder")
    List<Orders> getAllOrders() {return this.orderService.getAllOrders();}

    @GetMapping("/{orderid}")
    ResponseEntity<?> getOrderById(@PathVariable UUID id) {return  this.orderService.getOrderById(id);}

    @PostMapping("/sendOrder")
    ResponseEntity<Orders> addNewOrder(@Validated @RequestBody Orders orders) throws URISyntaxException{
        return this.orderService.addNewOrder(orders);
    }
}
