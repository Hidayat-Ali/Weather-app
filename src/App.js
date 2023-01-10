import React from "react";
import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./components/weather";
// import Form from "./components/Form";

const API_KEY = "8807b9ab8cc0f6c128de019fe0c6355b";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      city: undefined,
      country: undefined,
      description: "",
      icon: undefined,
      temp_min: undefined,
      temp_max: undefined,
      feels_like: undefined,
    };
    this.getWeather();
    this.weathericons = {
      Thunderstorm: "wi-thunderstorm",
      clouds: "wi-day-fog",
      clear: "wi-day-sunny",
    };
  }

  getWeatherIcons = (icons, rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weathericons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weathericons.Rain });
        break;
      case rangeId >= 801 && rangeId <= 802:
        this.setState({ icon: this.weathericons.clouds });
        break;
      case rangeId >= 700 && rangeId <= 782:
        this.setState({ icon: this.weathericons.Atmosphere });
        break;
      case rangeId >= 800:
        this.setState({ icon: this.weathericons.clear });
        break;
      default:
        alert("nothing is there");
        break;
    }
  };

  getWeather = async () => {
    const Api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`
    );
    const response = await Api_call.json();
    console.log(response);
    this.setState({
      city: response.name,
      country: response.sys.country,
      description: response.weather[0].description,
      temp_min: response.main.temp_min,
      temp_max: response.main.temp_max,
      feels_like: response.main.feels_like,
    });
    this.getWeatherIcons(
      this.weathericons.Thunderstorm,
      response.weather[0].id
    );
  };

  render() {
    return (
      <div className="App">
        <Weather
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          icon={this.state.icon}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          feels_like={this.state.feels_like}
        />
      </div>
    );
  }
}

export default App;
