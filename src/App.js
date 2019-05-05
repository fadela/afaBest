import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


import ImageUpload1 from './Components/ImageUpload1';
import ImageUplaod2 from './Components/ImageUpload2'

import { fileURLToPath } from 'url';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/imageupload1" component={ImageUpload1}/>
          <Route exact path="/imageupload2" component={ImageUplaod2}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
