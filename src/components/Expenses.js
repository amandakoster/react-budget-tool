import React, {Component} from 'react';
import ExpenseForm from './ExpenseForm';
import {renderIf} from '../lib/_.js';

class Expenses extends Component{
  constructor(props) {
    super(props);

    this.state= { budget: 0};

    this.handleNewBudget = this.handleNewBudget.bind(this);
    this.handleNewExpense = this.handleNewExpense.bind(this);
    this.deleteExpenseItem = this.deleteExpenseItem.bind(this);
  }
  componentDidMount(e){
    console.log('__E__STATE', this.state);
  }

  deleteExpenseItem(e) {
    e.preventDefault();
    let id = e.target.dataset['key'];
    this.props.app.setState(
      currentState =>
        ( {expenses: currentState.expenses.filter( (expense, i) => {
          return expense.id !== id;
        })})
    );
  }


  handleNewBudget(e) {
    e.preventDefault();
    let budget = e.target.querySelector('input[name=budget]').value;
    this.props.app.setState({budget});
    // this.props.handler(budget);
  }

  handleNewExpense(expense) {
    console.log('got', expense);
    this.props.app.setState( currentState => ({expenses: [...currentState.expenses, expense]}) );
    console.log(this.state);
  }

  render() {

    let totalSpent = this.props.app.state.expenses.reduce((acc, expense) => acc += parseInt(expense.amount), 0);

    let totalRemaining = this.props.app.state.budget - totalSpent;

    return (

      <div id='budgetWrapper'>

        <div>
          <h2>Budget Summary</h2>
          <h3>Budget: {this.props.app.state.budget}</h3>
          <h3>Spent: {totalSpent}</h3>
          <h3>Remaining: {totalRemaining}</h3>

          <form onSubmit={this.handleNewBudget} >
            <input name="budget" type="number" 
              placeholder="Enter Budget Amount" />
            <button>Set Budget</button>

          </form>
        </div>

        <div>
          <h2>Expenses</h2>
          {
            renderIf(
              totalRemaining,
              <ExpenseForm handler={this.handleNewExpense} />
            )
          }


          <table>
            <thead>
              <tr>
                <th colSpan='2'>Expense</th>
                <th colSpan='2'>Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.app.state.expenses.map( (expense, i) =>
          
                  <tr key={expense.id}>
                    <td><a onClick ={this.deleteExpenseItem} 
                      data-key={expense.id}
                      href="#">x</a></td>
                    <td>{expense.name}</td>
                    <td>{expense.amount}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>

      </div>

    );
  }

}

export default Expenses;
