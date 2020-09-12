import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Authenticate extends Component {

    render() {
        return (
            <div className="container">
            	<div className="header-text">
	            	<h3 className="has-text-centered">LOGING OR REGISTER</h3>
            	</div>
            	<div className="body">
            		<p className="has-text-centered">
            			To use Flash Cards Loging or Register
            			<br />
            			<Link to="/login">LOGING</Link> or <Link to="/register">REGISTER</Link>
            		</p>
            	</div>
            </div>
        );
    }
}

export default Authenticate;
