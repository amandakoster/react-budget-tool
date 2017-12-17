import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ReactDom from 'react-dom';
import Navbar from './components/Navbar';
import Expenses from './components/Expenses';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

let renderIf = (test, component) =>  test ? component : undefined;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

  }


  render() {
    return (

      <div>

        <Header appTitle="ToDo with Redux" />
        <Navbar />
        <main className='app'>
          <Expenses />
        </main>
    

        <Footer> <p> &copy; 2017 Amanda Koster</p></Footer>
      </div>
 
    );
  }
}

ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));