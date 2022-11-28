package com.example.bank_demo.service;



import java.util.List;

import java.util.Optional;

import org.bson.types.ObjectId;
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

@Component
@Transactional
public class Balance_service {
	@Autowired
	private Balance_Repo balance_repo;
	@Autowired
 private Balance p;
	
	public void Deleteuser(String h)
	{
		balance_repo.deleteById(h);;
	}
	public Balance Adduser(Balance p)
	{
		return balance_repo.save(p);
	}
	public Optional<Balance> finduser(String k)
	{
		return balance_repo.findById(k);
		  
	}
	public List<Balance> findAlluser()
	{
		return balance_repo.findAll();
		  
	}
	public Boolean Exi(String accNo)
	{
		return balance_repo.existsById(accNo);
	}
	
	
}
