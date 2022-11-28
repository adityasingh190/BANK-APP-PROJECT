package com.example.bank_demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.Setter;

@Data
@Setter
@Document(collection="deposit")
public class Deposit {

	private String accNo;
	private int amount;
	
}
