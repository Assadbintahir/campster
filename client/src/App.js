import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      successMessage: ''
    };
    this.apiReq()
  }
  apiReq() {
    fetch('/api/v1/test')
      .then(response => response.json())
      .then(state => {
        this.setState({successMessage: state.message})
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <b>{this.state.successMessage}</b>
        </header>
      </div>
    );
  }
}

export default App;
