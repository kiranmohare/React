import React from 'react';

const Search = (props) => (
	<div>
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="city..." />
		<input type="text" name="country" placeholder="country..." />
		<button>get weather</button>
	</form>	
	</div>
);

export default Search;