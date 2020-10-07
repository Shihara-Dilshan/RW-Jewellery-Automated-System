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
@RequestMapping("/api/v2/orders")
public class OrderController {


    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    @GetMapping("/allorder")
    List<Orders> getAll(){
        return this.orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    ResponseEntity<?> getOrderById(@PathVariable UUID id) {return  this.orderService.getOrderById(id);}

    @PostMapping("/sendorder")
    ResponseEntity<Orders> addNewOrder(@Validated @RequestBody Orders orders) throws URISyntaxException {
        return this.orderService.addNewOrder(orders);
    }

    @DeleteMapping("/deleteOrder/{id}")
    ResponseEntity<?> deleteOrder(@PathVariable UUID id) {return this.orderService.deleteOrder(id);
    }

    @RequestMapping("/recipe/{recipe}")
    List<Orders> getRecipeByStatus(@PathVariable String recipe){
        return this.orderService.getRecipeByStatus(recipe);
    }
}
