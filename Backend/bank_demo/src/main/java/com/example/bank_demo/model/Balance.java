package com.example.bank_demo.model;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Component
@Data
@Document(collection="details_u")
public class Balance {

	@Id
	private String accNo;
	private String custName;
	private int customerId;
	private String ifscCode;
	private long balance;
	private String password;
}
