import './SongDetail.css';
import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
	if(!props.song){
		return	<div className="song"> Please Select a song</div>
	}

	return(
		<div className="song"> 
			<h4> Selected Song </h4>
			<p>
				Title: <i>{props.song.title}</i> 
				<br />
				Duration: {props.song.duration}
			</p>
		</div>
	); 
};

const mapStateToProps = (state) => {
	return { song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);