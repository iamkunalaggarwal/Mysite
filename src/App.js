import React, { Component } from 'react';
import Home from './components/HomeComponent';
import {BrowserRouter} from 'react-router-dom';
import './App.css';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div>
      <Home/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
