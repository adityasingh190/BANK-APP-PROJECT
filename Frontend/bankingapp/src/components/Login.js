
import React, { Component } from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck,faTimes,faInfoCircle } from '@fortawesome/fontawesome-free-solid';
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import {Link, Routes, Route,BrowserRouter, useNavigate} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Welcome from './Welcome';
import Userslist from './Userslist';
import Accountslist from './Accountslist';
import Adduser from './Adduser';
import Addaccount from './Addaccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Update from './Update';
import Transfer from './Transfer';
import Transferdetails from './Transferdetails';
import DepositDetails from './DepositDetails';
import WithrawDetails from './WithrawDetails';
import Register1 from './Register1';
import Register from './Register';
import NavigationBar1 from './NavigationBar1';
import Deposit1 from './Deposit1';
import Withraw1 from './Withraw1';
import Transfer1 from './Transfer1';
import TransferDetails1 from './TransferDetails1';
import DepositDetails1 from './DepositDetails1';
import WithrawDetails1 from './WithrawDetails1';
import Balance from './Balance';





export default function Login() {
  
   
    const USER_REGEX = /^\d{9,18}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const userRef = useRef();
const errRef = useRef();
const [accNo, setAccNo] = useState("");

const [validName, setValidName] = useState(false);
const [userFocus, setUserFocus] = useState(false);
const [pwd, setPwd] = useState("");
const [validPwd, setValidPwd] = useState(false);
const [pwdFocus, setPwdFocus] = useState(false);
const [matchPwd, setMatchPwd] = useState("");
const [validMatch, setValidMatch] = useState(false);
const [matchFocus, setMatchFocus] = useState(false);
const [errMsg, setErrMsg] = useState("");
const [success, setSuccess] = useState(false);


  const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(accNo);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
   
   
 
    try {
      
      axios.get("http://localhost:8081//login", {params:{accNo:accNo,pwd:pwd}}, { headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'POST, PATCH, PUT, DELETE, OPTIONS',
    	'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    	'Access-Control-Allow-Credentials': true}},
    	{withCredentials: true},
    	{crossorigin: true})
    	.then(response => {
    		console.log(response.data);
        
    		if (response.data!=""){
          alert("Logged in");
            navigate('/NavigationBar1',{state:{accNo:accNo,custName:"Hello"+" "+response.data.custName}});
          }
          else{
            alert("Invalid account number or password");
          }
    	}).catch(function(error){
        console.log("error",error)
        alert(error);
        })
      setSuccess(true);
      //clear state and controlled inputs
      setAccNo("");
      setPwd("");
      setMatchPwd("");
     
      
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

useEffect(() => {
    userRef.current.focus();
  }, []);
  
  useEffect(() => {
    setValidName(USER_REGEX.test(accNo));
  }, [accNo]);
  
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);
  
  useEffect(() => {
    setErrMsg("");
  }, [accNo, pwd, matchPwd]);

    return (
      
      <div style={{backgroundSize:"cover",alignItems:"center",justifyContent:"center",backgroundImage:"src('data:image/jpeg;base64,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')" }}>
        <div >
        
	<Routes>
  
    	
				<Route path='/Register'  element={<Register/>}/>
				<Route path='/NavigationBar'  element={<NavigationBar/>}/>
    				<Route path='/Welcome'  element={<Welcome/>}/>
    				<Route path='/Userslist'  element={<Userslist/>}/>
    				<Route path='/Adduser'  element={<Adduser/>}/>
            <Route path='/Transferdetails' element={<Transferdetails/>}/>
            <Route path='/TransferDetails1' element={<TransferDetails1/>}/>
            <Route  path='/Deposit1'  element={<Deposit1/>}/>
    				<Route path='/Transfer'  element={<Transfer/>}/>
    				<Route path='/Deposit'  element={<Deposit/>}/>
    				<Route path='/Withdraw'  element={<Withdraw/>}/>
    				<Route path='/Update'  element={<Update/>}/>
            <Route path='DepositDetails'  element={<DepositDetails/>}/>
            <Route path='DepositDetails1'  element={<DepositDetails1/>}/>
            <Route path='/WithrawDetails' element={<WithrawDetails/>}/>
            <Route path='/WithrawDetails1' element={<WithrawDetails1/>}/>
            <Route path='/NavigationBar1' element={<NavigationBar1/>}/>
            <Route path='/Withdraw1'  element={<Withraw1/>}/>
            <Route path='/Transfer'  element={<Transfer1/>}/>
            <Route path='/Balance' element={<Balance/>}/>
				
					</Routes>
					
          </div>
      
        
        <section style={{marginTop:50,marginBottom:50,backgroundColor:"#b22222",alignItems:"center",justifyContent:"center",alignSelf:"center",marginLeft:500}}>
        <img src='data:image/png;base64,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'
        height={180} style={{alignSelf:"center",marginLeft:90,paddingBottom:0,marginBottom:0}}
        
        />
        
        
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          
          <form onSubmit={handleSubmit} style={{justifyContent:"center",alignItems:"center",color:"white",marginTop:50}}>
          <h1 style={{fontSize:30,color:"yellow"}}>Bank Login Page For User</h1>
            <label htmlFor="Account Number">
              Account Number:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validName || !accNo ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="text"
              style={{width:210}}
              id="Account number"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setAccNo(e.target.value)}
              value={accNo}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && accNo && !validName
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
             Must be a Number 
              <br />
              9 to 18 digits range should be there
             
            </p>
            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validPwd || !pwd ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="password"
              id="password"
              style={{width:210}}
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && !validPwd
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a
              number and a special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">
                !
              </span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validMatch && matchPwd ? "valid" : "hide"
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validMatch || !matchPwd ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="password"
              style={{width:210}}
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
            <button id="Log"style={{color:"black",marginTop:20}}
              disabled={
                !validName || !validPwd || !validMatch
                  ? true
                  : false
              }
            >
              Log In
            </button>
          </form>
          <p style={{color:"white"}}>Don't have an account? 
            <span style={{marginRight:20}}><Link to="/register1" style={{color:"yellow",textDecoration:"none"}}>Create Account</Link></span>
          </p>

          <p>
          <Button style={{marginLeft:90}}color='red' appearance="primary"> <Link to ='/Register' style={{textDecoration:"none"}}>Login as ADMIN</Link></Button>
          </p>
        </section>
        
      </div>
    );
  };
  
 