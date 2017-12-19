import React, {Component} from 'react';
import uuid from 'uuid/v4';
// import Expenses from './Expenses';

class ExpenseForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: uuid(),
      name: '',
      amount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewExpense = this.handleNewExpense.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name] : e.target.value});
  }

  handleNewExpense(e) {
    e.preventDefault();
    this.props.handler(this.state);
  }


  render(){
    // console.log('__F__STATE', this.state);
    return(

      <form id="expense-form" onSubmit={this.handleNewExpense}>
        <input className="form-item" placeholder="Expense Item" type="text" name="name" onChange={this.handleChange} />
   
        <input className="form-amount" placeholder="Amount" type="number" name="amount" onChange={this.handleChange}/>
 
        <button className="form-button" type="submit">Add Expense</button>

      </form>


    );
  }
}

export default ExpenseForm;
