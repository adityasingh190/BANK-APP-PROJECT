package com.example.bank_demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bank_demo.model.Balance;
import com.example.bank_demo.model.Deposit;
import com.example.bank_demo.model.Transfer;
import com.example.bank_demo.model.Withdraw;
import com.example.bank_demo.repository.Balance_Repo;
import com.example.bank_demo.repository.Deposit_Repo;

@RequestMapping("/")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Deposit_Controller {
	
	@Autowired
	private Deposit deposit;
	@Autowired
	private Deposit_Repo deposit_repo;
	@Autowired
	private Balance_Repo balance_repo;
	
//	Deposit amount in account
	@PutMapping(value="/deposit")
	public Balance depositeAmt(@RequestParam(value="accNo") String accNo, @RequestParam("amount") double amount) {
		if(balance_repo.existsById(accNo))
		{
		Balance b = balance_repo.findById(accNo).get();
		deposit.setAccNo(accNo);
		deposit.setAmount((int)amount);
		deposit_repo.save(deposit);
		b.setBalance(b.getBalance() + (int)amount);
		return balance_repo.save(b);
		
		}
		else
		{
			return null;
		}
	}
	
	
	@GetMapping("/displayAllDeposists")
	public List<Deposit> DisplayDeposits(){
		return  deposit_repo.findAll();
	
	
}
	@GetMapping(value="/displayAllDeposists1")
	public List<Deposit> DisplayDeposits1(@RequestParam("accNo")String accNo){
		List<Deposit> h= deposit_repo.findAll();
		List<Deposit> k=new ArrayList<Deposit>();
		for(Deposit trans:h)
		{
			if(trans.getAccNo().equals(accNo))
				k.add(trans);
		}
		return k;
	}
}
