import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from "./UserForm"

class App extends React.Component {
  constructor() {
    super ();

  }
  render () {
    return (
      <div className="App">
          <h1>Your mom!</h1>
          <div><UserForm /></div>
      </div>
    );
  }
}

export default App;
