import React from 'react';
import ReactDom from 'react-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

  }


  render() {
    return (
      <main className='app'>
        <h1>React Note Form</h1>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));