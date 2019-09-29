import axios from 'axios';

export const userLogin = (user) => {
	return axios.post('http://127.0.0.1:4000/api/v1/users')
	.then(response => console.log(response))
	.catch(error => console.log(error))
}