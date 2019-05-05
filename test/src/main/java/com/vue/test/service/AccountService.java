package com.vue.test.service;

import com.vue.test.domain.Account;
import com.vue.test.repository.AccountRepository;
import com.vue.test.util.ListUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;

    public List<Account> findAllAccounts() {
        List<Account> accounts = accountRepository.findAll();

        return ListUtil.getList(accounts);
    }
}
