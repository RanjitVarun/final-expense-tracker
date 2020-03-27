import React, { Component } from 'react';
import { FormControl, FormGroup, Button,label, Navbar, Nav,NavDropdown, Form } from 'react-bootstrap';


class Dashboard extends Component {
  constructor() {
    super();
   
  }

  
  render() {
    return (
      <div >
 
  <Navbar bg="light" expand="lg">

  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Dashboard</Nav.Link>
      <Nav.Link href="/expenseform">ExpenseTracker</Nav.Link>
      <Nav.Link href="/adduser">Create User</Nav.Link>
     
    </Nav>
    
      <Button variant="outline-success">Logout</Button>
  
  </Navbar.Collapse>
</Navbar>

      </div>
    );
  }
}

export default Dashboard;
