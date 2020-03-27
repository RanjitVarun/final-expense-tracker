import React, { Component } from 'react';
import { Table, Label, Alert, Nav, NavItem, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';



class Piechart extends Component {
  constructor() {
    super();
    this.state = {
     work:0
    };


  }
  addExpense=()=>{
       console.log('working')
     
   this.setState({work:1})

  }
  renderRedirect=()=>{
      if(this.state.work==1)
      {
        return <Redirect to='/expenseform' />
      }
      else{}

  }

 
  render() {
   

    return (
      <div className="expense-table">
        <h3>Total Expense</h3>
        <h2> APi for amount</h2><br/>
        <Button onClick={this.addExpense}>Add Expense</Button><br/><br/>
        <Link to="/manager"><Button  >Add User</Button>  </Link>
        {this.renderRedirect()}
      </div>
    );
  }
}

export default Piechart;
