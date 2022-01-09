import React from 'react';
import '../css/Weather.css';
import moment from 'moment';

class Weather extends React.Component {
  
  state = {
    lat: undefined,
    lon: undefined,  
    city: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    icon: undefined,
    sunrise: undefined,
    sunset: undefined,
    errorMessage: undefined,
  }

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });    
  }
  
  getWeather = async (latitude, longitude) => { 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
    const data = await api_call.json();    
    
    this.setState({
      lat: latitude,
      lon: longitude,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      icon: data.weather[0].icon,
      sunrise: moment.unix(data.sys.sunrise).format("hh:mm a"),
      sunset: moment.unix(data.sys.sunset).format("hh:mm a"),
    })
  }

  componentDidMount() {
    this.getPosition()
    .then((position) => {      
      this.getWeather(position.coords.latitude, position.coords.longitude)
    })
    .catch((err) => {
      this.setState({ errorMessage: err.message });
    });

    this.timerID = setInterval(        
      () => 
      this.getWeather(this.state.lat, this.state.lon),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  

  render() {
    const { city, temperatureC, icon} = this.state;
    if (city) {
      return (
        <div className="weather">  
          <div className="weather-box">
          <div>
              <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon"/>
            </div>    
            <div className="weather-item">{temperatureC} &deg;C</div>    
            <div className="weather-item">{city}</div>      
          </div>
        </div>
      );      
    }
    else {
      return (
        <div></div>
      )
    }  
  }
}

export {Weather};