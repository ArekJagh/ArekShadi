package com.example.TheTechHeads.service;

import com.example.TheTechHeads.model.Order;
import com.example.TheTechHeads.repository.OrderRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    @InjectMocks
    private OrderService orderService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateOrder() {
        Order order = new Order("Product 1", 100.0, new Date(), null);
        when(orderRepository.save(any(Order.class))).thenReturn(order);

        Order created = orderService.createOrder(order);

        assertNotNull(created);
        assertEquals("Product 1", created.getProductName());
    }

    @Test
    void testGetOrderById() {
        Order order = new Order("Product 1", 100.0, new Date(), null);
        when(orderRepository.findById(1L)).thenReturn(Optional.of(order));

        Order found = orderService.getOrderById(1L);

        assertNotNull(found);
        assertEquals("Product 1", found.getProductName());
    }
}