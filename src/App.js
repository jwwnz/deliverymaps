import React, { Component } from "react";
import logo from "./logo.svg";
import SimpleMap from "./components/Map";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Delivery maps</h1>
        </header>
        <SimpleMap />
      </div>
    );
  }
}

export default App;
