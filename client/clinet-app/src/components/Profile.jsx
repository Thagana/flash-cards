import React, { Component } from 'react';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	username : 'Samuel',
        	email: 'samuel@gmail.com',
        	totalCards: 3
        }
    }

    render() {
        return (
          	<div>
          		<nav>
          			NavBar
          		</nav>
          	</div>  
        );
    }
}

export default Profile;
