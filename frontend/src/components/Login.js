import React from 'react';
import {Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {

    state = {
        data: {
            Username: '',
            password: '',
            permission:0
          
        }
       
        
    };

    datachangeName=(e)=>{
        this.setState({Username:e.target.value})
       // console.log(this.state.Username)
    }
    datachangePass=(e)=>{
        this.setState({password:e.target.value})
       // console.log(this.state.password)
    }

   validateLogin=()=>{
  if(this.state.Username=='admin' && this.state.password=='admin')
  {
    this.setState({permission:1})
}
  else{
     this.setState({permission:0})
  }

   }

   renderRedirect = () => {
      //console.log(this.state.permission)
  //console.log(this.state.permission)
    if(this.state.permission==1){
        console.log(true)
        return <Redirect to='/tracker' />
    }

    else
    {
      
        
    }
}




    render() {
      
        return (
            <div>
<h3>login page</h3>
<label>Username</label>
                                <input type="text" id="Username" name="name"placeholder="Username" value={this.state.Username} onChange={this.datachangeName}></input><br/>
                                <label>Password</label>
                                <input type="password" id="password"  placeholder="keep it secure" value={this.state.password} onChange={this.datachangePass}></input>                               
                           <Button onClick={this.validateLogin}>Login</Button>
                           {/* <Button onClick={this.renderRedirect}>check</Button> */}
                           {this.renderRedirect()}
                         
            </div>
        );
    }
}




export default Login;
