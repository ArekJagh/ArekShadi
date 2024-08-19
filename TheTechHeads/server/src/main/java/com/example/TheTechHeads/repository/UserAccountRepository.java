package com.example.TheTechHeads.repository;

import com.example.TheTechHeads.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
    // Add any custom query methods here
}
