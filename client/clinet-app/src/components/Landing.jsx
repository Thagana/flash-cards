import React, { Component } from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
class Landing extends Component {

    render() {
        return (
            <div>
	            <div>
	            	<Navbar />
            	</div>
            	<div>
	            	<Cards />
            	</div>
            </div>
        );
    }
}

export default Landing;
