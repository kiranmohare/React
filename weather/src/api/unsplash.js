import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
				Authorization:
				'Client-ID 3a0ee5faaae8d7a014395d9f13284a1c3960229ea00b9199e5db96d748591045'
			} 
});