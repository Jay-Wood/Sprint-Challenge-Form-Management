import React, { useState, useEffect } from 'react';
import './App.css';
import UserForm from "./UserForm";
import axios from "axios";
import PeepsDisplay from "./PeepsDisplay";

class App extends React.Component {
  constructor() {
    super ();
  }



 
  render () {
    return (
      <div className="App">
          <h1>Your mom!</h1>
          <div><UserForm /></div>
          <div>
            <PeepsDisplay />

          </div>
      </div>
    );
  }
}

export default App;
