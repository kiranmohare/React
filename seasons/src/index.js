import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//functional method 
// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position) => console.log(position),
// 		(err) => console.log(err)
// 		);
// 	return (
// 		<div> Hi There </div>
// 		);
// }

// class based method
class App extends React.Component {
	state = {lat: null, long:null, errMsg: ''}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
		(position) => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
		(err) => this.setState({errMsg: err.message})
		);
	}

	render(){
		if( this.state.errMsg && !this.state.lat){
			return <div> Error : {this.state.errMsg} </div>;
		}

		if(!this.state.errMsg && this.state.lat){
			return <SeasonDisplay lat= {this.state.lat} />
		}

		return <Spinner message= 'Please allow location request'/>
	}
}
  
ReactDOM.render(<App />, document.querySelector('#root'))