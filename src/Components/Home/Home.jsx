import React, { Component } from 'react';
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="bigText textColor">
          <text>Hello World, I'm </text>
          <Typed
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
        </div>

        <div className="textSpacing textColor">
          <h3>BS Computer Engineering Student | San Jose State University</h3>
          <h3>Fall 2017 - Spring 2021</h3>
        </div>
        
        <div id="icons">
          <a href="src\Wong_Davin_Resume.pdf" target="_blank" rel="noopener noreferrer" class="iconSpacing">
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
          <a href="mailto: davinlamwong@gmail.com" target="_blank" rel="noopener noreferrer" class="iconSpacing">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/RTX-Banana" target="_blank" rel="noopener noreferrer" class="iconSpacing">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/davin-wong-1a6930196/" target="_blank" rel="noopener noreferrer" class="iconSpacing">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
