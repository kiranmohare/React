import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'All the Stars', duration: '4:30'},
		{ title: 'Taki Taki', duration: '3:30'},
		{ title: 'me myself & I', duration: '4:10'},
		{ title: 'Mean Demeanor', duration: '3:33'}
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if(action.type === 'SONG_SELECTED'){
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});