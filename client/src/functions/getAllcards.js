import axios from 'axios';

export const getAllCards = () => {
	const token = localStorage.getItem('usertoken');
	return axios.get('http://127.0.0.1:4000/api/v1/cards',
		{
			headers : { 'auth-token' : token }
		}
		)
	.then((response ) => {
		return response;
	})
	.catch((error) => console.log(error))
}