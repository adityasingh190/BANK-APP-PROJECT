package com.example.bank_demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.bank_demo.model.Transfer;
@Repository
public interface transfer_repo extends MongoRepository<Transfer,Integer> {

}
