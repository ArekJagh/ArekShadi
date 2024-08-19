package com.example.TheTechHeads;

import com.example.TheTechHeads.model.Order;
import com.example.TheTechHeads.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public Map<String, Object> processPayment(@RequestBody Order order) {
        // Here you can add logic to process the payment
        // For example, if the payment is successful:
        orderService.createOrder(order);
        return Map.of("success", true, "message", "Payment successful");
    }
}
