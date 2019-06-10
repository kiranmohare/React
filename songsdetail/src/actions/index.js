// Action creator
export const songSelect = (song) => {
	//return an action
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};