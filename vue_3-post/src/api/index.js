import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create({
		baseURL,
		...options,
	});
	return instance;
}
export const posts = create('http://localhost:3000/posts');
