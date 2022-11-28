package com.example.bank_demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.mongo.MongoRepositoriesAutoConfiguration;
import org.springframework.data.mongodb.repository.support.MongoRepositoryFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bank_demo.model.Balance;
import com.example.bank_demo.model.Deposit;
import com.example.bank_demo.model.Withdraw;
import com.example.bank_demo.repository.Balance_Repo;
import com.example.bank_demo.repository.Withdraw_Repo;

@RequestMapping("/")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Withdraw_Controller {

	@Autowired
	private Withdraw_Repo w;
	
	@Autowired
	private Withdraw k;
	
	@Autowired
	private Balance_Repo b;
	
	@PutMapping(value="/withraw")
	public Balance AmountTransfer(@RequestParam(value="accNo") String accNo, @RequestParam("withraw_amount") double withraw_amount)
	{
		
		   Balance l=b.findById(accNo).get();
		   if(l==null)
		   {
			   return null;
			  
			  
		   }
		   if(l.getBalance()>=withraw_amount)
		   {
		  k.setAccNo(accNo);
		   k.setWithraw_amount((int)withraw_amount);
		   w.save(k);
		   l.setBalance(l.getBalance()-((int)withraw_amount));
		  return b.save(l);
		  
		   }
		   else
			   return null;
		   
		}
	
	@PutMapping(value="/withraw1")
	public String AmountTransfer1(@RequestParam(value="accNo") String accNo, @RequestParam("amount") double withraw_amount)
	{
		
		   Balance l=b.findById(accNo).get();
		   if(l==null)
		   {
			   return null;
			  
			  
		   }
		   if(l.getBalance()>=withraw_amount)
		   {
		  k.setAccNo(accNo);
		   k.setWithraw_amount((int)withraw_amount);
		   w.save(k);
		   l.setBalance(l.getBalance()-((int)withraw_amount));
		   b.save(l);
		   String amt=String.valueOf(withraw_amount);
		  return "Purchase Successfull"+" "+"."+amt+" "+"Deducted from your current balance";
		  
		   }
		   else
			   return "Purchase cannot happen due to insufficient balance";
		   
		}
	
	@GetMapping("/displayAllWithrawals")
	public List<Withdraw> DisplayWithrawals(){
		return  w.findAll();
           	
}
	@GetMapping(value="/displayAllWithrawals1")
	public List<Withdraw> DisplayWithrawals1(@RequestParam("accNo")String accNo){
		List<Withdraw> h= w.findAll();
		List<Withdraw> k=new ArrayList<Withdraw>();
		for(Withdraw trans:h)
		{
			if(trans.getAccNo().equals(accNo))
				k.add(trans);
		}
		return k;
	}
}
