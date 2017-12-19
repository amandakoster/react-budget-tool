import React, {Component} from 'react';

class Home extends Component {

  render() {
    return(
      <div>

        <h1 className="home-title">Home</h1>
        <p>This is a React budget tool that manages state without Redux. </p>
        <p>Features: React.js, React Router, React Router Dom, SASS, Jest.js, Enzyme.js, Babel, Customized Webpack.</p> 
        <p>Users can select 'Expenses' from the navtype thier expense amount into one input field, the expense item into another input field, and click submit to populate the page. As a user enters expense items, the budget field will subtract their expence items.</p>
        <p>Users can type thier expense amount into one input field, the expense item into another input field, and click submit to populate the page. As a user enters expense items, the budget field will add the expense item and amount.</p>


      </div>
    );
  }


}

export default Home;