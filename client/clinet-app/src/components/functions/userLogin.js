import axios from 'axios';

export const userLogin = (user) => {
	return axios.post('http://127.0.0.1:4000/api/v1/users/login',
	{
		username: user.username,
		password: user.password
	})
	.then((response) => {
		console.log(response);
		if(response.status === 200){
			if(response.data.fieldError){
				return { 'fieldError' : response.data.fieldError }
			}else if(response.data.userError){
				return { 'userError' : response.data.userError }
			}else if(response.data.authError){
				return { 'authError' : response.data.authError }
			}else{
				return { 'success' : response.data.data.message }
			}
		}else{
			return { 'error' : 'Something went wrong!'}
		}
	})
	.catch(error => console.log(error))
}