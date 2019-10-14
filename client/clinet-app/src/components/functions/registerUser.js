import axios from 'axios';

export const registerUser = (newUser) => {
	return axios.post('http://127.0.0.1:4000/api/v1/users/register', 
	{
		username: newUser.username,
		password: newUser.password,
		email: newUser.email
	})
	.then((response) => {
		console.log(response);
		if(response.status === 200){
			if(response.data.userError){
				return { error: { userError : response.data.userError } }
			}
			if(response.data.fieldError){
				return { error: { fieldError: response.data.fieldError }}
			}
			if(response.data.success){
				return { success: { success : response.data.success } }
			}
		}
		
	})
	.catch(error => console.log(error))
}