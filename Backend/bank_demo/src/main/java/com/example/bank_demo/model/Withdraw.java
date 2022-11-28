package com.example.bank_demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Setter;

@Data
@Setter
@Document(collection="withdraw")
@Component
public class Withdraw {

	
	private String accNo;
	private int withraw_amount;
	
}
