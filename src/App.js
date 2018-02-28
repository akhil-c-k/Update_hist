import React, { Component } from 'react';
import Hello from './HelloComponent';
import About from './AboutComponent';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NameForm from './my_form.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <ul>
          <li><Link to="/hello">Home</Link></li>
          <li><Link to="/about">Histogram</Link></li>
         
</ul>

 <NameForm/>
        <Route path="/hello" component={Hello} />
        <Route path="/about" component={About} />
        
        </div>
      </Router>
    );
  }
}

export default App;
