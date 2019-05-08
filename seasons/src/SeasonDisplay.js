import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
	summer: {
		weather: 'its too hot! Lets hit the beach',
		iconName: 'sun'
	},
	winter: {
		weather: 'its too cold! Lets go snowboarding',
		iconName: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	if(month>2 && month <9){
		return lat > 0 ? 'summer' : 'winter';
	}
	else {
		return lat < 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const {weather, iconName} = seasonConfig[season];
	return (
		<div className= {`season-display ${season}`}> 
			<i className = {`icon-left huge ${iconName} icon`} />
			<h1> {weather} </h1>
			<i className = {`icon-right huge ${iconName} icon`} />
		</div>
		);
};

export default SeasonDisplay;