import React, { Component } from "react";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: ""
    };
    this.apiReq();
  }
  apiReq() {
    fetch("/api/v1/test")
      .then(response => response.json())
      .then(state => {
        this.setState({ successMessage: state.message });
      });
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p>Message from API server.</p>
            <b>{this.state.successMessage}</b>
          </header>
          <div>
            <Routes />
          </div>
        </div>
    );
  }
}

export default App;
