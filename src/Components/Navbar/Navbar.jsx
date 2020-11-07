import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { flexbox } from '@material-ui/system';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Button variant="contained" justifyContent="center">Home</Button>
            <Button variant="contained" justifyContent="center">About Me</Button>
            <Button variant="contained" justifyContent="center">Projects</Button>
            <Button variant="contained" justifyContent="center">Work Experience</Button>
            <Button variant="contained" justifyContent="center">Contact Me</Button>
        </div> );
    }
}
 
export default Navbar;