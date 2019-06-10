import './SongDetail.css';
import React from 'react';
import { connect } from 'react-redux';
import { songSelect } from '../actions';

class SongList extends React.Component {
	renderList(){
		return this.props.songs.map((song) => {
			return (
				<div className="item song-list" key={song.title}> 
					<div className="right floated content"> 
						<button
						className="ui button primary"
						onClick={() => this.props.songSelect(song)}
						>
							Select Song
						</button>	
					</div>
					<div className="content"> {song.title} </div>
				</div>
			);
		});
	}

	render() {
			return(
				<div className="ui divided list"> {this.renderList()} </div>
			);
		}
	}

const mapStateToProps = (state) => {
	return { songs : state.songs };
};

export default connect(mapStateToProps, {songSelect})(SongList);