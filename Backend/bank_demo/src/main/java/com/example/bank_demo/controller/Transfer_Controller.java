package com.example.bank_demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bank_demo.model.Balance;
import com.example.bank_demo.model.Deposit;
import com.example.bank_demo.model.Transfer;
import com.example.bank_demo.repository.Balance_Repo;
import com.example.bank_demo.repository.transfer_repo;

import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Transfer_Controller {
@Autowired
private transfer_repo trn;
@Autowired
private Transfer k;
@Autowired
private Balance_Repo b;

//Transfer amount in another account
@PutMapping(value="/transfer")
public String AmountTransfer(@RequestParam("accNo") String accNo,@RequestParam("accNo1") String accNo1,@RequestParam("transfer_amount") int transfer_amount)
{
//	if(accNo1.equals("")|| transfer_amount==0)
//	{
//		return "Please enter account number and amount";
//	}
	if(b.findById(accNo).isPresent() && b.findById(accNo1).isPresent())
	{
	   Balance l=b.findById(accNo).get();
	   Balance f=b.findById(accNo1).get();
	   if(l.getBalance()>=transfer_amount)
	   {
		   Transfer i=new Transfer();
	   i.setAmt_to_trans((int)transfer_amount);
	   i.setSource_accNo(accNo);
	   i.setDest_accNo(accNo1);
	   trn.insert(i);
	   l.setBalance(l.getBalance()-(int)transfer_amount);
	   b.save(l);
	   f.setBalance(f.getBalance()+(int)transfer_amount);
	   b.save(f);
	   return "Amount transferred";
	   }
	   else
		   return  "Amount not sufficient in your account";
	   
	}
	else
		return "Account Not Found";}

//@PutMapping("/transfer/{source_accNo}/{dest_accNo}/{amt_to_trans}")
//public ResponseEntity<String> AmountTransfer(@PathVariable int source_accNo,@PathVariable int dest_accNo,@PathVariable int amt_to_trans)
//{
//	
//	   Mono<Balance> l=b.findById(source_accNo);
//	   Mono<Balance> f=b.findById(dest_accNo);
//	   l.map(u->{if(u.getBalance()>=amt_to_trans)
//	   {
//	   k.setAmt_to_trans(amt_to_trans);
//	   k.setDest_accNo(dest_accNo);
//	   k.setSource_accNo(source_accNo);
//	   trn.save(k);
//	   l.setBalance(u.getBalance()-amt_to_trans);
//	   b.save(u);
//	   f.map(j->j.setBalance(j.getBalance()+amt_to_trans);
//	   b.save(j);
//	   return new ResponseEntity<>("Amount transferred",HttpStatus.ACCEPTED);
//	   }
//	   else
//		   return  ResponseEntity.badRequest().body("Amount not sufficient in your account");
//	   }))
//	}
	
@GetMapping("/displayAllTransfers")
public List<Transfer> DisplayTransfers(){
	return  trn.findAll();
}

@GetMapping(value="/displayAllTransfers1")
public List<Transfer> DisplayTransfers1(@RequestParam("accNo")String accNo){
	List<Transfer> h=  trn.findAll();
	List<Transfer> k=new ArrayList<Transfer>();
	for(Transfer trans:h)
	{
		if(trans.getSource_accNo().equals(accNo))
			k.add(trans);
	}
	return k;
}
}

