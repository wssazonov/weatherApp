import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = 'b46626b1c1a5f40685099d41b1e4535f';

class App extends Component {
  render() {
    return (
      <div >
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
