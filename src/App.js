import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = 'b46626b1c1a5f40685099d41b1e4535f';

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    coutry: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    // console.log(data);


    if (city) {
      const api_url = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: ""
      });
    } 
  }

  render() {
    return (
      <div >
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
