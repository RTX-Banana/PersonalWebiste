import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";

class App extends Component {
  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
