package com.example.TheTechHeads.service;

import com.example.TheTechHeads.model.UserAccount;
import com.example.TheTechHeads.repository.UserAccountRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserAccountServiceTest {

    @Mock
    private UserAccountRepository userAccountRepository;

    @InjectMocks
    private UserAccountService userAccountService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateUserAccount() {
        UserAccount userAccount = new UserAccount("user1", "user1@example.com", "password1");
        when(userAccountRepository.save(any(UserAccount.class))).thenReturn(userAccount);

        UserAccount created = userAccountService.createUserAccount(userAccount);

        assertNotNull(created);
        assertEquals("user1", created.getUsername());
    }

    @Test
    void testGetUserAccountById() {
        UserAccount userAccount = new UserAccount("user1", "user1@example.com", "password1");
        when(userAccountRepository.findById(1L)).thenReturn(Optional.of(userAccount));

        UserAccount found = userAccountService.getUserAccountById(1L);

        assertNotNull(found);
        assertEquals("user1", found.getUsername());
    }
}
