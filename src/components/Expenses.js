import React, {Component} from 'react';

class Expenses extends Component{
  constructor(props) {
    super(props);

    this.state= {
      budget: 0,
      expenses: [],
    };
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
          <h3>Budget: {totalRemaining}</h3>
        </div>

        <h1>Budget</h1>
      </div>

    );
  }

}

export default Expenses;
