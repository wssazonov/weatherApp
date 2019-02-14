import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = 'b46626b1c1a5f40685099d41b1e4535f';

class App extends Component {

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div >
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
