package com.vue.test.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Table(name = "ACCOUNT")
@Getter
public class Account {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ACCOUNT_ID")
    private Long id;

    @Column(name = "ACCOUNT_EMAIL", nullable = false, unique = true)
    private String email;

    @Column(name = "ACCOUNT_NAME", nullable = false)
    private String name;
}
