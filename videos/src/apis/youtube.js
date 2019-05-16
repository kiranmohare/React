import axios from 'axios';

const KEY ='AIzaSyBcfIko84Mi8EGp23IUvjjCSLKTRd-05ls';

export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3',
	params: {
		part:'snippet',
		maxResults: 10,
		key: KEY
	}
	});
