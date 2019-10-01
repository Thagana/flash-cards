import axios from 'axios';

export const registerUser = (newUser) => {
	return axios.post('http://127.0.0.1:4000/api/v1/users')
				.then((response) => {
					console.log(response);
					if(response.status === 200){
						if(response.data.fieldError){
							return { fieldError : response.data.fieldError }
						}else if(response.data.userError){
							return { userError: response.data.userError }
						}else{
							return { success: response.data.success }
						}
					}
					if(response.status === 201){
						return { success: response.data.success }
					}
				})
				.catch(error => console.log(error))
}