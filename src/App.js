// Create a new component, and this should produce some HTML.
// Sec.1 lec.9 1. importing React is a way of telling the modules
// we have to find react, and assign it to that very variable "React";
import React, { Component } from 'react';
// import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        Hi!
        </div>
      </div>
    );
  }
}

export default App;
// Take this components HTML and put it on the page or DOM.