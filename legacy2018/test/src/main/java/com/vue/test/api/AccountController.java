package com.vue.test.api;

import com.vue.test.domain.Account;
import com.vue.test.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/account")
public class AccountController {

    private final AccountService accountService;

    @CrossOrigin("*")
    @GetMapping("/all")
    public ResponseEntity<List<Account>> getAllAccount() {
        return ResponseEntity.ok(accountService.findAllAccounts());
    }
}
