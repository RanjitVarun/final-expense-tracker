import React, { Component } from 'react';
import { Table, Label, Alert, Nav, NavItem , Button,Element} from 'react-bootstrap';
import axios from 'axios';




class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
     userlist:[],
     firtFive:[],
     userid:false,
     key:''
    };

  }
  componentDidMount() {
  const id=  localStorage.getItem('token')
    axios.get('http://localhost:4000/userdetails/relation', {headers: {
      'Authorization': id
    }})
      .then(res => {
        console.log(res.data);
    
        const persons = res.data;
        this.setState({ userlist:persons});
      })
  }

rendertableagain=()=>{
  console.log('here')
  axios.get('http://localhost:4000/userdetails/relation')
  .then(res => {
    console.log(res.data);

    const persons = res.data;
    this.setState({ userlist:persons});
  

  })
}



  


  deleteUser=(e)=>{
    console.log(e)
    axios.delete('http://localhost:4000/userdetails/delete/'+e)
    .then(res => {
     
   this.rendertableagain()
     
    })
  
  
  }


  editUser=(e)=>{
   // console.log('editUser',e)
    this.props.updateTrigger(e);
  
  }



  



renderUserValues=()=>{
  return this.state.userlist.map((result) => {
    return (
      
      <tr key={result.id}>

         <th>{result.name}</th>
         <th>{result.password}</th>
    <th>{result.dname}</th>
    <th>{result.rname}</th>
    <th>{result.salary}</th>
    <th></th>
    <th><Button onClick={() => this.deleteUser(result.id)}>Delete</Button>&nbsp;<Button onClick={()=>this.editUser(result.id)}>Edit</Button></th>
    
      </tr>
    
    )
  })
}
 
  render() {
   

    return (
      <div>
        <h3>User List</h3>
     
        <Table responsive bordered>
       
          <thead>
            <tr value={this.state.key}>
              <th>User Name</th>
              <th>Password</th>
              <th>Department</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Total Expense</th>
              <th>Action</th>
            
            </tr>
          </thead>
          <tbody>
         
            {this.renderUserValues()}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserList;
