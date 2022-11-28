import React, { Component } from 'react'
import {Navbar, Nav,Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Home from './Home';
import Welcome from './Welcome';
import Welcome1 from './Welcome1';

export default class NavigationBar extends Component {
    render() {
        return (
			<div >
            <Navbar style={{backgroundColor:"black"}} variant="dark">
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
			<Welcome1/>
			<Home/>
			</div>
    	);
    }

}


// import "~bootstrap/scss/bootstrap"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import React, { Component }  from 'react';
// import { render } from 'react-dom';
// import Home from './Home';
//  import Welcome from './Welcome';


// export default function NavigationBar() {
//   return (
// 	<div>
//     {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='text-wrap'>
//       <Container>
//         <Navbar.Brand style={{}} href="#home">IDFC Bank</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-wrap'/>
//         <Navbar.Collapse id="responsive-navbar-nav" className='text-wrap'>
//           <Nav style={{flexGrow:1,justifyContent:"evenly"}}className="me-auto text-wrap">
//             <Nav.Link href="#NavigationBar">Home</Nav.Link>
//             <Nav.Link href="#Adduser" style={{text}} className='text-wrap'>Add user</Nav.Link>
// 			<Nav.Link href="#Deposit">Deposit</Nav.Link>
// 			<Nav.Link href="#Withdraw">Wihtdraw</Nav.Link>
// 			<Nav.Link href="#Transfer">Transfer</Nav.Link>
// 			<Nav.Link href="#DepositDetails">DepositDetails</Nav.Link>
// 			<Nav.Link href="#WihtrawDetails">Wihtdraw Details</Nav.Link>
// 			<Nav.Link href="#TransferDetails">Transfer Details</Nav.Link>
// 			<Nav.Link href="#Userlist">User Details</Nav.Link>
          
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
	
// 	 			<Welcome/>
// 				<Home/> */}


// <nav className="navbar navbar-inverse bg-dark text-white">
//       <div className="container-fluid">
//         <div className="navbar-header">
//           {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//           </button> */}
//           <a className="navbar-brand" href={" "}>WebSiteName</a>
//         </div>
//         <div className="collapse navbar-collapse" id="myNavbar" >
//           <ul className="nav navbar-nav" >
         
//             <li ><a href={"#NavigationBar"} style={{color:"white",marginRight:170}}className="text-light">Home</a></li>
//             <li><a href={"#Adduser"}className="text-light"></a>Add user</li>
//             <li><a href={"#Deposit"}className="text-light">Deposit</a></li>
// 			<li><a href={"#Withdraw"}className="text-light">Withdraw</a></li>
//             <li><a href={"#Transfer"}className="text-light">Transfer</a></li>
// 			<li><a href={"#Update"}className="text-light">Update user</a></li>
// 			<li><a href={"#DepositDetails"}className="text-light">Deposit Details</a></li>
//             <li><a href={"#WihtrawDetails"}className="text-light">Withdraw Details</a></li>
// 			<li><a href={"#TransferDetails"}className="text-light">Transfer Details </a></li>
//             <li><a href={"#Userlist"}className="text-light">User Details</a></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
// 	<Welcome/>
// 	<Home/>
	
// 				</div>
//   );
// }

