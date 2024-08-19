package com.example.TheTechHeads;

import com.example.TheTechHeads.model.Order;
import com.example.TheTechHeads.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Order> getCartItems() {
        return orderService.getAllOrders();
    }

    @PostMapping("/add")
    public Map<String, Object> addItemToCart(@RequestBody Order order) {
        orderService.createOrder(order);
        return Map.of("success", true, "message", "Item added to cart");
    }
}
