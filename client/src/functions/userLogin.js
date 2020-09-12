import axios from 'axios';

export const userLogin = (user) => {
	return axios.post('http://127.0.0.1:4000/api/v1/users/login',
	{
		username: user.username,
		password: user.password
	})
	.then((response) => {
		// console.log(response);
		if(response.status === 200){
			if(response.data.userError){
				return { userError : response.data.userError }
			}
			if(response.data.authError){
				return { authError : response.data.authError }
			}
			if(response.data.data.message){
				return { success : { message: response.data.data.message, token: response.data.data.token} }
			}
		}else{
			return { error : 'Something went wrong!'}
		}
	})
	.catch(error => console.log(error))
}