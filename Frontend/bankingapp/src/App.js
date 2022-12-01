import React from 'react';
import logo from './logo.svg';
import './App.css';
import img from './components/img.png';

import {Container, Row, Jumbotron, Col} from 'react-bootstrap';
import { Switch,Router, Route, Routes, BrowserRouter} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Userslist from './components/Userslist';
import Accountslist from './components/Accountslist';
import Adduser from './components/Adduser';
import Addaccount from './components/Addaccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';

import Update from './components/Update';
import Transfer from './components/Transfer';
import Transferdetails from './components/Transferdetails';
import DepositDetails from './components/DepositDetails';
import WithrawDetails from './components/WithrawDetails';
import Register1 from './components/Register1';
import Register from './components/Register';
import Login from './components/Login';


import NavigationBar1 from './components/NavigationBar1';
import Welcome1 from './components/Welcome1';
import Deposit1 from './components/Deposit1';
import Withraw1 from './components/Withraw1';
import Transfer1 from './components/Transfer1';
import Update1 from './components/Update1';
import TransferDetails1 from './components/TransferDetails1';
import DepositDetails1 from './components/DepositDetails1';
import WithrawDetails1 from './components/WithrawDetails1';
import Balance from './components/Balance';




import Chatbot from './components/Chatbot';
import Shopping from './Shopping/Shopping';

 




function App() {
  const marginTop = {
  	marginTop:'20px'
  }
  return (
    <div>
		<Chatbot/>
		
		<BrowserRouter>
	<Routes>
	
				<Route path='/'  element={<Register1/>}/>
				<Route path='/Welcome1'  element={<Welcome1/>}/>
				<Route path='/Register' element={<Register/>}/>
				<Route path='/NavigationBar'  element={<NavigationBar/>}/>
				<Route path='/NavigationBar1' element={<NavigationBar1/>}/>
    				<Route path='/Welcome'  element={<Welcome/>}/>
    				<Route path='/Userslist'  element={<Userslist/>}/>
					<Route path='/Transferdetails' element={<Transferdetails/>}/>
					<Route path='/TransferDetails1' element={<TransferDetails1/>}/>
    				<Route path='/Adduser'  element={<Adduser/>}/>
					<Route path='/Transfer'  element={<Transfer/>}/>
    				<Route path='/Deposit'  element={<Deposit/>}/>
    				<Route path='/Withdraw'  element={<Withdraw/>}/>
    				<Route path='/Update'  element={<Update/>}/>
					<Route path='/Update1'  element={<Update1/>}/>
					<Route path='/DepositDetails'  element={<DepositDetails/>}/>
					<Route path='/DepositDetails1'  element={<DepositDetails1/>}/>
					<Route path='/WithrawDetails' element={<WithrawDetails/>}/>
					<Route path='/WithrawDetails1' element={<WithrawDetails1/>}/>
					<Route path='/Login' element={<Login/>}/>
					<Route  path='/Deposit1'  element={<Deposit1/>}/>
					<Route path='/Withdraw1'  element={<Withraw1/>}/>
					<Route path='/Transfer1'  element={<Transfer1/>}/>
					<Route path='/Balance' element={<Balance/>}/>
					<Route path='/Shopping' element={<Shopping/>}/>
				
					 </Routes>
					</BrowserRouter>
    </div>
  );
}

export default App;
