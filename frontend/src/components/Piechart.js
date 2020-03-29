import React, { Component } from 'react';
import { Table, Label, Alert, Nav, NavItem, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'



class Piechart extends Component {
  constructor() {
    super();
    this.state = {
     amountSum:'',
     role:'',
     userId:'',
     amount:[]
    };


  }
  componentDidMount=()=>{
    const id=  localStorage.getItem('role')
this.setState({role:id})
const user= localStorage.getItem('userId');
console.log(user);
this.setState({userId:user})
axios.get('http://localhost:4000/expensedetails/'+user)
      .then(res => {
        //console.log(res.data);
    
        const persons = res.data;
       this.setState({ amount:persons});
      })
  }

  renderAmount=()=>{
    var sum=null
 
  this.state.amount.map((result) => {
     sum=sum+result.amount
})
return (
<h2 style={{ color: "green" }}>{sum}/-</h2>
)
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
  renderaddUser=()=>{
  if(this.state.role=="admin")
  {
    return(
      <Link to="/manager"><Button  >Add User</Button>  </Link>
    );
  }
  }

 
  render() {
   

    return (
      <div className="expense-table">
        <h3>Total Expense</h3>
        {/* <h2> APi for amount</h2><br/> */}
        {this.renderAmount()}
        <br/><Button onClick={this.addExpense}>Add Expense</Button><br/><br/>
        {this.renderaddUser()}
        {/* <Link to="/manager"><Button  >Add User</Button>  </Link> */}
        {this.renderRedirect()}
      </div>
    );
  }
}

export default Piechart;
