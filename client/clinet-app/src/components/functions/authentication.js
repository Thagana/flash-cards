const token = localStorage.getItem('usertoken')
export const Authentication = {
	isAuthenticated: token ? true : false,
	authenticate(cb){
		this.isAuthenticated = true;
		//Wait 100ms to execute the callaback
		setTimeout(cb, 100)
	},
	signout(cb){
		this.isAuthenticated = false;
		//wait 100ms to execute the callback
		setTimeout(cb, 100)
	}
}