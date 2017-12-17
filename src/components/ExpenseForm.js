import React, {Component} from 'react';
import uuid from 'uuid/v4';
import Expenses from './Expenses';

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

  handleNewExpense(expense) {
    console.log(expense);

  }


  render(){
    return(

      <form onSubmit={this.handleNewExpense}>

        <lable>
        Expense Item: <input type="text" name="name" onChange={this.handleChange} />
        </lable>
        <lable>
        Amount: <input type="number" name="amount" onChange={this.handleChange}/>
        </lable>

      </form>


    );
  }
}

export default ExpenseForm;
