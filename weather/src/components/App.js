import React from 'react';
import Search from './Search';
import GetWeather from './GetWeather';
import WeatherFinderText from './WeatherFinderText';

const API_KEY = '669bc6fbee4ad26ce2d56f8fbb2004d5';

class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		pressure: undefined,
		description: undefined,
		error: undefined
	}

	//helper method
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		const response = await api_call.json();
		if(city && country){
			console.log(response);
			this.setState({
				temperature: response.main.temp,
				city: response.name,
				country: response.sys.country,
				humidity: response.main.humidity,
				pressure: response.main.pressure,
				description: response.weather[0].description,
				error: undefined
			});
		}
		else {
			this.setState({
				error: 'please enter correct values'
			});
		}
	}

	render() {
		return(
			<div>
		        <div className="wrapper">
		          <div className="main">
		            <div className="container">
		              <div className="row">
		                <div className="col-xs-4 title-container">
		                  <WeatherFinderText />
		                </div>
		                <div className="col-xs-8 form-container">
		                  <Search getWeather={this.getWeather} />
		                  <GetWeather 
		                    temperature={this.state.temperature} 
		                    humidity={this.state.humidity}
		                    city={this.state.city}
		                    country={this.state.country}
		                    description={this.state.description}
		                    error={this.state.error}
		                  />
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
	      	</div>
		);
	}
}

export default App;