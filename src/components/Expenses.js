import React, {Component} from 'react';

class Expenses extends Component{
  constructor(props) {
    super(props);

    this.state= {
      budget: 0,
      expenses: [],
    };
    this.handleNewBudget = this.handleNewBudget.bind(this);
  }

  handleNewBudget(e) {
    let budget = e.target.value;
    this.setState({budget});
  }

  render() {

    let totalSpent = 0;
    let totalRemaining = 0;

    return(

      <div id='budgetWrapper'>

        <div>
          <h2>Budget Summary</h2>
          <h3>Budget: {this.state.budget}</h3>
          <h3>Spent: {totalSpent}</h3>
          <h3>Remaining: {totalRemaining}</h3>

          <form>
            <input type="number" 
              onChange={this.handleNewBudget} 
              placeholder="Enter New Budget Amount"></input>
          </form>
        </div>

        <div>
          <h2>Expenses</h2>
          <table>
            <thead>
              <tr>
                <th colSpan='2'>Expense</th>
                <th colSpan='2'>Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.expenses.map((expenses, i) =>
                  <tr key={expenses.id}>
                    <td><a href="#">x</a></td>
                    <td>{expenses.name}</td>
                    <td>{expenses.amount}</td>
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
