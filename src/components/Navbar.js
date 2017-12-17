import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Expenses from './Expenses';
import Home from './Home';

class Navbar extends Component {

  render() {
    return(
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
        </ul>
      </nav>

    );
  }
}

export default Navbar;
