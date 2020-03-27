import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseList';
import Piechart from './Piechart'
class ExpenseManager extends Component {
  constructor() {
    super();
    this.state = {
      
    };


  }

  

  render() {
    return (
      <div className="container">
        <div className="expense-manager">
          <div className="row">
          {/* <Col md={3}>
              <ExpenseForm/>
            </Col> */}
            <Col md={3}>
              <Piechart/>
            </Col>
            <Col md={8}>
              <ExpenseTable/>
            </Col>
            
          </div>
         
        </div>
      </div>
    );
  }
}

export default ExpenseManager;
