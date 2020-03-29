import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      department:'',
      category:'',
      amount:'',
      categorylist:[],
      deptlist:[],
      amount:'',
      userid:''

     };
  }


  componentDidMount() {
   
    axios.get('http://localhost:4000/department')
      .then(res => {
     // console.log(res.data);
    
        const persons = res.data;
        this.setState({deptlist:persons});
      })
      axios.get('http://localhost:4000/category')
      .then(res => {
       // console.log(res.data);
    
        const persons = res.data;
        this.setState({categorylist:persons});
      })
  }


  changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
   }

  
  renderDropdown=()=>{
    return this.state.deptlist.map((result) => {
      return (
      <option key={result.id} >{result.dname}</option>
      )
    })
  }


  rendercatDropdown=()=>{
    return this.state.categorylist.map((result) => {
      return (
      <option key={result.id} >{result.cname}</option> 
      )
    })
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    
  const user={
    department:this.state.department,
    category:this.state.category,
    amount:this.state.amount,
   userid:localStorage.getItem('userId')
  }
   console.log(user)

  axios.post('http://localhost:4000/addexpense', { user })
      .then(res => {
    console.log(res)       
        this.setState({amount:''});
      });
  }





  
  render() {
    return (
      <div className="expense-form">
        <h3>Add Expense</h3>
        <form onSubmit={this.handleFormSubmit}>
        <FormGroup
            >
                <label>Department</label><br/>
              
                <select 
                name='department'
           defaultValue={this.state.deptlist} 
           onChange={this.changeHandler} 
           >
             {this.renderDropdown()}
            </select>
             
            </FormGroup>
      
            <FormGroup
            
            >
                <label>Category</label><br/>
              
                <select 
                name='category'
           defaultValue={this.state.categorylist} 
           onChange={this.changeHandler} 
           >
             {this.rendercatDropdown()}
            </select>
             
            </FormGroup>

          <FormGroup
            
          >
              <label> Amount</label>
          
            <FormControl
              type="text"
         
              placeholder="Insert value"
              name="amount"
              value={this.state.amount}
              onChange={this.changeHandler}
            />
            <FormControl.Feedback />
           
          </FormGroup>

          <Button
            type="submit"
          >
            Save
          </Button>
          <Link to="/tracker"><Button  >Back</Button>  </Link>
          

        </form>

      </div>
    );
  }
}

export default ExpenseForm;
