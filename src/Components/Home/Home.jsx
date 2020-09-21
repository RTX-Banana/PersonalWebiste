import React, { Component } from "react";
import Typed from "react-typed";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <text className="text">Hello World, I'm </text>
        <Typed
          className="text"
          strings={[
            "a <u>Computer Engineer<u>!",
            "<u>Amazing</u>!",
            "<u>Determined</u>!",
            "<u>Ambitious</u>!",
            "<u>Dilligent</u>!",
            "<u>Flexible</u>!",
            "<u>Davin Wong</u>!",
          ]}
          typeSpeed={75}
          backDelay={2500}
          smartBackspace
          backSpeed={75}
          loop
        ></Typed>
        <h5>BS Computer Engineering Student | San Jose State University</h5>
      </div>
    );
  }
}

export default Home;
