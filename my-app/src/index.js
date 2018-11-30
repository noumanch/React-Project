import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import Cities from './cities';
import Login from './login';
import Signup from './signup';


const routing = (
  <Router>
    <div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cities">Cities</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route  path="/cities" component={Cities} />
      <Route  path="/login" component={Login} />
      <Route  path="/signup" component={Signup} />
    </div>
  </Router>
)
  const button = (
    <div>
      <img id="userimage" src="./userlogo.png" alt=""/>
    </div>
  // <div className="button tooltip">
  // <p className="tooltiptext">Login CreateAccount</p>
  //   <button  className="hamburger" type="button">
  //     <span className="hamburger-box">
  //     <span className="hamburger-inner"></span>
  //     </span>
  //   </button>
  // </div>

  )
ReactDOM.render(routing, document.getElementById('root'));
ReactDOM.render(button, document.getElementById('button'));
