import React, { Component } from 'react';
import { FormControl, FormGroup, Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      department:'',
      deptdropdown:[],
      dropValue:'',
      role:'',
      roledropdown:[],
      salary:'',
     };
  }


  componentDidMount() {
    console.log('comdidmount')
    axios.get('http://localhost:4000/department')
      .then(res => {
      const persons = res.data;
        this.setState({deptdropdown:persons});
      })
    axios.get('http://localhost:4000/role')
      .then(res => {
        const persons = res.data;
        this.setState({roledropdown:persons});
      })
  }
   

  changeHandler=(e)=>{
   this.setState({[e.target.name]:e.target.value})
  }


  renderDropdown=()=>{
    console.log('2')
    return this.state.deptdropdown.map((result) => {
      return (
      <option key={result.id} >{result.dname}</option>
      )
    })
  }

  renderRoleDropdown=()=>{

   console.log('1')
    return this.state.roledropdown.map((result) => {
      return (  
      <option>{result.rname}</option>
       
      )
    })
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    const user={
    name:this.state.username,
    password:this.state.password,
    department:this.state.dropValue,
    role:this.state.role,
    salary:this.state.salary
     }
    console.log(user)
    axios.post('http://localhost:4000/userdetails/create', { user })
      .then(res => {
        console.log('adduser working')
        this.props.triggerUpdate();
        this.setState({username:'',password:'',dropValue:'',role:'',salary:''});
      });
  }



renderEdit=()=>{
  const id=this.props.editId;
  console.log(id);
}


render() {
    return (
      <div >
        <h3>Create New user</h3>
        <form onSubmit={this.handleFormSubmit}>

        <FormGroup>
           <label>User Name</label>
            <FormControl
              type="text"
              name='username'
          onChange={this.changeHandler}
          value={this.state.username}
              placeholder="" 
            />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup >
        <label>Password</label>
            <FormControl
              type="text"
              name='password'
              placeholder=""
              onChange={this.changeHandler}
          value={this.state.password}
            />
            <FormControl.Feedback />
           
          </FormGroup>

          <FormGroup>
              <label>Department</label><br/>
            
              <select 
              name='dropValue'
         defaultValue={this.state.dropValue} 
         onChange={this.changeHandler} 
         >
           {this.renderDropdown()}
          </select>
           
          </FormGroup>
          <FormGroup>
              <label>Role</label><br/>
              <select 
              name='role'
         defaultValue={this.state.role} 
         onChange={this.changeHandler} 
         >
           {this.renderRoleDropdown()}
          </select>
          </FormGroup>
           
          <FormGroup>
          <label>Salary</label>
            <FormControl
              type="text"
              name='salary'
              placeholder=""
              onChange={this.changeHandler}
          value={this.state.salary}
            />
            <FormControl.Feedback />
           
            </FormGroup>
         
          <Button
            type="submit"
           
          >
            ADD
          </Button>&nbsp;
          <Link to="/tracker"><Button  >Back</Button>  </Link>

        </form>
      
    
      </div>
    );
  }
}

export default AddUser;
