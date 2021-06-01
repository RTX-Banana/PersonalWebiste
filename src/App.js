import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from './components/Navbar/Navbar';
import Routes from './Routes';
import './App.css'

const browserHistory = createBrowserHistory();

export default function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}
