package com.example.bank_demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.bank_demo.model.Balance;
import com.example.bank_demo.repository.Balance_Repo;
import com.example.bank_demo.service.Balance_service;

import reactor.core.publisher.Mono;
//import com.example.demo.webflux_model.Person;

@Component
@RequestMapping("/")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Balance_Controller {
	@Autowired
	private Balance_service a;
	
	@GetMapping("/login")
	public Balance Login(@RequestParam("accNo")String accNo,@RequestParam("pwd")String password)
	{
	if(a.Exi(accNo))
	{
		Balance p=a.finduser(accNo).get();
		if(p.getPassword().equals(password))
		return p;		
		else
			return null;
		
	}
	else
		return null;
	}
	@PutMapping(value="/balance")
	public Balance add(@RequestParam(value="accNo")String accNo, @RequestParam("pwd")String password) {
		
		
	Balance m=new Balance();
	m.setAccNo(accNo);
	m.setPassword(password);
		return (a.Adduser(m));
		
		}
	@PostMapping(value="/addUser")
	public Balance add1(@RequestParam(value="accNo")String accNo, @RequestParam("custName")String custName,@RequestParam("customerId")long customerId,@RequestParam("ifscCode") String ifscCode,@RequestParam("balance")double balance,@RequestParam("password")String password) {
		
		if(!a.Exi(accNo))
		{
			Balance p=new Balance();
			p.setAccNo(accNo);
			p.setCustName(custName);
			p.setCustomerId((int)customerId);
			p.setIfscCode(ifscCode);
			p.setBalance((long)balance);
			p.setPassword(password);
		
			
		return a.Adduser(p);}
		else
		{
			return null;
		}
		}
	
	@PostMapping(value="/addUser1")
	public Balance add2(@RequestParam(value="accNo")String accNo, @RequestParam("custName")String custName,@RequestParam("customerId")long customerId,@RequestParam("ifscCode") String ifscCode,@RequestParam("pwd")String password) {
		
		if(!a.Exi(accNo))
		{
			Balance p=new Balance();
			p.setAccNo(accNo);
			p.setCustName(custName);
			p.setCustomerId((int)customerId);
			p.setIfscCode(ifscCode);
p.setBalance(0);
			p.setPassword(password);
		
			
		return a.Adduser(p);}
		else
		{
			return null;
		}
		}

	@PostMapping("/addUser2")
	public Balance add2(@RequestBody Balance q) {
		
		if(!a.Exi(q.getAccNo()))
		{
			Balance p=new Balance();
			p.setAccNo(q.getAccNo());
			p.setCustName(q.getCustName());
			p.setCustomerId((int)q.getCustomerId());
			p.setIfscCode(q.getIfscCode());
			p.setBalance((long)q.getBalance());
			p.setPassword(q.getPassword());
		
			
		return a.Adduser(p);}
		else
		{
			return null;
		}
		}

	

	@GetMapping("/viewUserDetails/{accNo}")
	public ResponseEntity<Balance> viewUserDetails(@PathVariable String accNo) {
		Optional<Balance> p= a.finduser(accNo);
		Balance l;
		if(p.isPresent())
		{
			  l = p.get();
	            return ResponseEntity.ok().body(l);
		}
		return null;
	}
//	

	@GetMapping("/viewAllUserDetails")
	public List<Balance> viewUserDetails() {
		return (List<Balance>)a.findAlluser();
	}
	


	
	@GetMapping(value="/viewBalance")
	public String viewBalance(@RequestParam("accNo") String accNo) {
		Balance p=a.finduser(accNo).get();
	String o= String.valueOf(p.getBalance());
	return o;
	}
	@DeleteMapping("/DeleteUsers/{accNo}")
		public String DeleteUsers(@PathVariable String accNo)
		{
		a.Deleteuser(accNo);
		return "Deleted sucessfully";
	}
	//

	@PutMapping("/Update")
	public ResponseEntity<Balance> UpdateUserDetails(@RequestParam(value="accNo")String accNo,@RequestParam("accNo1")String accNo1, @RequestParam("custName")String custName,@RequestParam("customerId")long customerId,@RequestParam("IFSC_code") String ifscCode,@RequestParam("balance")double balance,@RequestParam("password")String password)
	{
		
		if(a.Exi(accNo))
		{
			Balance p=a.finduser(accNo).get();
		p.setAccNo(accNo1);
		p.setPassword(password);
		p.setCustName(custName);
	p.setBalance((int)balance);
		p.setCustomerId((int)customerId);
		p.setIfscCode(ifscCode);
		if(accNo!=accNo1)
			a.Deleteuser(accNo);
		final Balance o= a.Adduser(p);
		
		return ResponseEntity.ok(o);
		}
		else
			return null;
		
	}
	@PutMapping("/Update1/{accNo1}")
	public ResponseEntity<Balance> UpdateUserDetails1(@PathVariable String accNo1,@RequestBody Balance l)
	{
		
		
			Balance p=a.finduser(accNo1).get();
		p.setAccNo(l.getAccNo());
		p.setPassword(l.getPassword());
		p.setCustName(l.getCustName());
	
		p.setCustomerId(l.getCustomerId());
		p.setIfscCode(l.getIfscCode());
		p.setBalance(l.getBalance());
		if(l.getAccNo()!=accNo1)
			a.Deleteuser(accNo1);
		final Balance o= a.Adduser(p);
		
		return ResponseEntity.ok(o);
		
		
	}
	
	@PutMapping("/Update2")
	public ResponseEntity<Balance> UpdateUserDetails4(@RequestParam(value="accNo")String accNo,@RequestParam("accNo1")String accNo1, @RequestParam("custName")String custName,@RequestParam("customerId")long customerId,@RequestParam("IFSC_code") String ifscCode,@RequestParam("password")String password)
	{
		
		if(a.Exi(accNo))
		{
			Balance p=a.finduser(accNo).get();
		p.setAccNo(accNo1);
		p.setPassword(password);
		p.setCustName(custName);
	   
		p.setCustomerId((int)customerId);
		p.setIfscCode(ifscCode);
		if(accNo!=accNo1)
			a.Deleteuser(accNo);
		final Balance o= a.Adduser(p);
		
		return ResponseEntity.ok(o);
		}
		else
			return null;
		
	}
	

	
	
}
