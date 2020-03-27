import React, { Component } from 'react';
import { Table, Label, Alert, Nav, NavItem , Button} from 'react-bootstrap';
import axios from 'axios';
class ExpenseTable extends Component {
  constructor() {
    super();
    this.state = {
     expenseList:[]
    };

  }


componentDidMount() {

  axios.get('http://localhost:4000/expensedetails/all')
    .then(res => {
   // console.log(res.data);
  
      const persons = res.data;
      this.setState({expenseList:persons});
    })
   
}
sliceresult(date){
  if(date==null)
  {

  }
  else{
var date=date;
var result=date.slice(0,10);
return result
}
}
deleteExpense=(e)=>{
console.log(e);
}

renderExpValues=()=>{
  return this.state.expenseList.map((result) => {
    return (
      
      <tr key={result.id}>

         <th>{result.name}</th>
         <th style={{ color: "red" }}>{result.amount}</th>
    <th>{result.dname}</th>
    <th>{result.cname}</th>
    <th></th>
    <th>{this.sliceresult(result.tstamp)}</th>
  
    <th><Button onClick={() => this.deleteExpense(result.id)}>Delete</Button>&nbsp;</th>
    
      </tr>
    
    )
  })
}

  render() {
    return (
      <div className="expense-table">
        <h3>Expense List</h3>
        <Table responsive bordered>
          <thead>
            <tr>
            <th>Name</th>
              <th>Amount (₹)</th>
              <th>Department</th>
              <th >Category</th>
              <th>Approved by</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderExpValues()}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ExpenseTable;
