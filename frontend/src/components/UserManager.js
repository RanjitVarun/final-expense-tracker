import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import UserList from './UserList';
import Adduser from './AddUser';

class UserManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed:1,
   editId:null
    };


  }
  updateDisplay=()=>{
    console.log('updating state')
    
   
    this.setState(state => ({  isDisplayed: Math.floor(Math.random() * 100) + 1  }));
    console.log(this.state.isDisplayed)
    console.log(Number.isInteger(this.state.isDisplayed))
  }


  updateUser=(e)=>{
   // console.log('updating user')
    //console.log(e);
    const userid=e;
//console.log(userid)
 this.setState({editId:e}) 
  //  console.log(this.state);

  }


  
 

  render() {
  
    return (
      <div className="container">
        <div className="Usermanager">
          <div className="row">
    
          <Col md={3}>


          <div>
     <Adduser triggerUpdate={this.updateDisplay} editId={this.state.editId}/> 
        
      </div>
              
            </Col>
            <Col md={8} key={this.state.isDisplayed}>
             
       
           <UserList  updateTrigger={this.updateUser}/>
            </Col>
           
          </div>
         
        </div>
      </div>
    );
  }
}

export default UserManager;
