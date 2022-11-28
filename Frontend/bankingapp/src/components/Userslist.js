import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Jumbotron,Dropdown} from 'react-bootstrap';

import {Card, Table} from 'react-bootstrap'
import axios from 'axios';

export default class Userslist extends Component {

	constructor(props){
		super(props);
		this.state = {
			users: []
		};
	}

	componentDidMount(){
		axios.get("http://localhost:8081//viewAllUserDetails", { headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    	'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}},
    	{withCredentials: true},
    	{crossorigin: true})
    	.then(response => response.data)
		.then((data) => {
			this.setState({users: data});
		});
	}

	render () {
		return (

<>
<div >
            <Navbar  style={{backgroundColor:"black"}} variant="dark">
            	<Link to={""} className="navbar-brand">
            		<img
				        alt=""
				        src="data:image/png;base64,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"
				        width="30"
				        height="30"
				        className="d-inline-block align-top"
			        />{' '}
            	</Link>
			    <Nav className="mr-auto">
				<Link to={"/NavigationBar"} style={{color:"white"}} className="nav-link">Home</Link>
				    <Link to={"/Adduser"} style={{color:"white"}} className="nav-link">Add User</Link>
				 
				    <Link to={"/Deposit"} style={{color:"white"}} className="nav-link">Deposit</Link>
				    <Link to={"/Withdraw"} style={{color:"white"}}className="nav-link">Withdraw</Link>
					<Link to={'/Update'} style={{color:"white"}}className="nav-link">Update</Link>
					<Link to={"/Transfer"} style={{color:"white"}} className="nav-link">Transfer</Link>
				    <Link to={"/Userslist"} style={{color:"white"}}className="nav-link">Show Users</Link>
					<Link to={"/Transferdetails"} style={{color:"white"}}className="nav-link">Transfer Details</Link>
				    <Link to={"/DepositDetails"} style={{color:"white"}} className="nav-link">Deposit Details</Link>
					<Link to={"/WithrawDetails"} style={{color:"white"}} className="nav-link">Withraw  Details</Link>
					<Dropdown className="dropdown-groove">
               <Dropdown.Toggle variant="link" style={{color:"white",textDecoration:"none"}}>
    Log out
  </Dropdown.Toggle  >
  <Dropdown.Menu>
    
      <Dropdown.Item style={{color:"black"}} as={Link} to="/Register">Log out</Dropdown.Item>
    
	
      <Dropdown.Item style={{color:"black"}} as={Link} to="/Login" >Log in as User</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
				    
			    </Nav>
		  	</Navbar>
			
			<div style={{backgroundSize:"cover",backgroundImage:"url(`${kam.jpg}`)"}}>
			 <Jumbotron className=" text-dark" style={{backgroundColor:"#f0e68c",height:320,opacity:0.5 ,paddingBottom:0,marginBottom:20,backgroundSize:30,width:1533 ,backgroundSize:"cover" ,backgroundImage:"url('data:image/jpeg;base64,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')"}}>
				 <div style={{marginLeft:20}}>
			<h1 
style={{color:"rgb(176,0,0)",marginLeft:440,display:"table",backgroundColor:"black"}} > WELCOME TO BANKING</h1>
				  <h2 style={{color:"black",marginLeft:530,fontSize:45}} >
				 <strong>DEPOSIT DETAILS</strong> 
				  </h2>
				  </div>
			</Jumbotron>
			</div >
			</div>


<div style={{backgroundRepeat:"no-repeat",width:1750,backgroundSize:"cover",backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVr19m816je6tE6b8rusGLwjzq2bcVsUhprg&usqp=CAU')"}}></div>
			<Card style={{alignItems:"center",justifyContent:"center",marginLeft:310,width:950,backgroundSize:"cover",backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbdUmlrAvwDMX2KFXEq6QKnBd-r5BRaFK5bQ&usqp=CAU')"}}className={"border border-dark  text-white"}>
				<Card.Header 
className="text-white bg-dark">All Entries Secured</Card.Header>
				<Card.Body>
					<Table bordered hover striped variant="dark">
				    	<thead>
						    <tr>
						      <th style={{textAlign:"center",width:"50%",justifyContent:"center"}}>User ID</th>
						      <th style={{textAlign:"center"}}>User Name</th>
							  <th style={{textAlign:"center"}}>Customer Id</th>
							  <th style={{textAlign:"center"}}>IFSC Code</th>
							  <th style={{textAlign:"center"}}>Balance</th>
							  <th style={{textAlign:"center"}}>Password</th>
						    </tr>
					  	</thead>
					  	<tbody>
						  {
						  	this.state.users.length === 0 ?
						  	<tr align="center">
						    	<td colSpan="6">Users Not Present.</td>
						    </tr> : 
						    this.state.users.map((user) => (
						    <tr key={user.accNo}>
					    		<td style={{textAlign:"center",width:35}}>{user.accNo}</td>
					    		<td style={{textAlign:"center",width:35}}>{user.custName}</td>
								<td style={{textAlign:"center",width:35}}>{user.customerId}</td>
								<td style={{textAlign:"center",width:35}}>{user.ifscCode}</td>
								<td style={{textAlign:"center",width:35}}>{user.balance}</td>
								<td style={{textAlign:"center",width:35}}>{user.password}</td>
					    	</tr>
						    ))
						    
						  }
					  	</tbody>
					</Table>
				</Card.Body>
			</Card>
			</>
		);
	}
}