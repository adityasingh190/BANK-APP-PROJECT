
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
import Register from './Register';
import Login from './Login';
import NavigationBar1 from './NavigationBar1';
import Deposit1 from './Deposit1';






export default function Register1() {
  
   
    const USER_REGEX = /^\d{9,18}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const userRef = useRef();
const errRef = useRef();
const [accNo, setAccNo] = useState("");
const [ifscCode, setifscCode] = useState("");
const [balance, setbalance] = useState("");
const [custName, setcustName] = useState("");
const [customerId, setcustomerId] = useState("");
const [validcustName, setvalidcustName] = useState(false);
const [validcustId, setvalidcustId] = useState(false);
const [validifscCode, setvalidifscCode] = useState(false);

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
const IFSC_REGEX = /[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/;
const NAME_REGEX=/^[A-Za-z]+([\ A-Za-z]+)*$/;
const ID_REGEX=/^[0-9]*$/;
  const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(accNo);
    const v2 = PWD_REGEX.test(pwd);
    const v3=IFSC_REGEX.test(ifscCode);
    const v4=ID_REGEX.test(customerId);
    if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg("Invalid Entry");
      return;
    }
   
   const pal={
    accNo:accNo,custName:custName,customerId:customerId,ifscCode:ifscCode,pwd:pwd
   };
 
    try {
      
      axios.post("http://localhost:8081//addUser1",{}, {params:pal}, { headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'POST, PATCH, PUT, DELETE, OPTIONS',
    	'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    	'Access-Control-Allow-Credentials': true}},
    	{withCredentials: true},
    	{crossorigin: true})
    	.then(response => {
    		console.log(response);
        
    		if (response.data === ""){
                alert("Account number already occupied. Create with another one")}
                else
                {
               // const a=()=>{setcustName({custName:"Hello"+" "+custName})}
                alert("Account successfully created")
            navigate('/NavigationBar1',{state:{accNo:accNo,custName:"Hello"+" "+custName}});}
          
    	}).catch(function(error){
        console.log("error",error)
        alert(error);
        })
      setSuccess(true);
      //clear state and controlled inputs
      setAccNo("");
      setcustName("");
      setcustomerId("");
      setifscCode("");
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

  useEffect(()=>{
    setvalidcustId(ID_REGEX.test(customerId));

  }, [customerId]
  );
  
  useEffect(() => {
    setValidName(USER_REGEX.test(accNo));
  }, [accNo]);
  
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(()=>
  {
setvalidifscCode(IFSC_REGEX.test(ifscCode));
    
  }

  ,[ifscCode]
  );
  useEffect(()=>
  {
    setvalidcustName(NAME_REGEX.test(custName));
  },[custName]
  );

  useEffect(() => {
    setErrMsg("");
  }, [accNo,custName,customerId,ifscCode, pwd, matchPwd]);

    return (
      
      <div style={{backgroundSize:"cover"    ,backgroundImage:"src('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2npOEMqROrYZ6pbNYzSIcRBpw7qP25dfLA&usqp=CAU')" ,alignItems:"center",justifyContent:"center"}}>
        <div >
        
	<Routes>
    	<Route path='/NavigationBar1' element={<NavigationBar1/>}/>
				<Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
				<Route path='/NavigationBar'  element={<NavigationBar/>}/>
    				<Route path='/Welcome'  element={<Welcome/>}/>
    				<Route path='/Userslist'  element={<Userslist/>}/>
    				<Route path='/Adduser'  element={<Adduser/>}/>
            <Route path='/Transferdetails' element={<Transferdetails/>}/>
    				<Route path='/Deposit1'  element={<Deposit1/>}/>
    				<Route path='/Transfer'  element={<Transfer/>}/>
    				<Route path='/Deposit'  element={<Deposit/>}/>
    				<Route path='/Withdraw'  element={<Withdraw/>}/>
    				<Route path='/Update'  element={<Update/>}/>
            <Route path='DepositDetails'  element={<DepositDetails/>}/>
            <Route path='/WithrawDetails' element={<WithrawDetails/>}/>
				
					</Routes>
					
          </div>
        
        {/* <section style={{borderRadius:30,border:"solid black" ,backgroundSize:"cover",backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYEQeUYqf_3OD0EQ10e1Y8uspb0aLBPcjpIGUTqUL8Sgf2VBoPKKm28OPV99bdfJXytwE&usqp=CAU')",backgroundColor:"#e0ffff",justifyContent:"center",alignItems:"center",marginLeft:500,marginTop:50,marginBottom:50}}> */}
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
          
          <form onSubmit={handleSubmit}style={{justifyContent:"center",alignItems:"center",color:"white",marginTop:50}}>
          <h1 style={{fontSize:30,color:"yellow"}}>USER SIGN UP</h1>
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

            
            <label htmlFor="Customer Name">
              Customer Name:
              <FontAwesomeIcon
                icon={faCheck}
                className={validcustName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validcustName || !custName ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="text"
              id="Customer Name"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setcustName(e.target.value)}
              value={custName}
              required
              aria-invalid={validcustName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}

            />
            <p
              id="uidnote"
              className={
                userFocus && custName && !validcustName
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
             Must be Alphabets
              
              
             
            </p>

            <label htmlFor="customerId">
              Customer Id:
              <FontAwesomeIcon
                icon={faCheck}
                className={validcustId ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validcustId || !customerId ? "hide" : "invalid"
                }
              />
            </label>
            <input
            maxLength={6}
            minLength={6}
              type="text"
              id="customerId"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setcustomerId
                (e.target.value)}
              value={customerId}
              required
              aria-invalid={validcustId ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              
            />
            <p
              id="uidnote"
              className={
                userFocus && customerId && !validcustId
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
             Must be a number and 6 digits
              
              
             
            </p>

            <label htmlFor="ifscCode">
              IFSC Code:
              <FontAwesomeIcon
                icon={faCheck}
                className={validifscCode ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validifscCode || !ifscCode ? "hide" : "invalid"
                }
              />
            </label>
            <input
            
              type="text"
              id="ifscCode"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setifscCode
                (e.target.value)}
              value={ifscCode}
              required
              aria-invalid={validifscCode ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              
            />
            <p
              id="uidnote"
              className={
                userFocus && ifscCode && !validifscCode
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
             Must start with 4 capital characters followed by '0' and then followed by 6 letters which can be charaters as well as digits.
              
              
             
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
            <button style={{color:"black",marginTop:20}}
              disabled={
                !validName || !validPwd || !validMatch || !validcustId || !validcustName || !validifscCode
                  ? true
                  : false
              }
            >
              Sign up
            </button>
          </form>
          <p style={{color:"white"}}>Already have an account? 
            <span style={{marginRight:20}}><Link to="/login" style={{color:"yellow",textDecoration:"none"}}>Login</Link></span>
          </p>

          <p>
          <Button style={{marginLeft:90}}color='red' appearance="primary" > <Link to ='/Register' style={{textDecoration:"none"}}>Login as ADMIN</Link></Button>
          </p>
        </section>
        
      </div>
    );
  };
  
 