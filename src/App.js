import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import './App.scss';

class App extends Component {
  render() {
    console.log("App - Rendered");

    return (
      <div class="background">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
