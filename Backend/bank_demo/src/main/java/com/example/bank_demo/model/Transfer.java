package com.example.bank_demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Document(collection="transfer")
@Component
public class Transfer {
	
private String source_accNo;
private int amt_to_trans;
private String dest_accNo;
}
