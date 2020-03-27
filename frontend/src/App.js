import React from 'react';
import { Route, Router } from 'react-router-dom';
import login from './components/Login'
import expenseform from './components/ExpenseForm'
import ExpenseTracker from './components/ExpenseTracker'
import UserManager from './components/UserManager'
import addUser from './components/AddUser'


class App extends React.Component {

  render() {
    return (
      <div >
       <h2>Expense Manager</h2><br/>
      {/* // <Dashboard/> */}
       <Route path="/" exact component={login}></Route>

       <Route path="/expenseform" exact component={expenseform}></Route>
      
     
       <Route path="/tracker" exact component={ExpenseTracker}></Route>
      
   
       <Route path="/manager" exact component={UserManager}></Route>
      
       {/* <Route path="/nav" exact component={navigationbar}></Route> */}
      </div>
    );
  }
}


export default App;
