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
        <header>
          <h4>Some Recipe Thing</h4>
        </header> 
        <div className="body">
          <div><UserForm /></div>
          <div>
            <PeepsDisplay />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
