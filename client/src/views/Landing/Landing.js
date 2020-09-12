import React, { Component } from 'react';
import Navbar from '../Navbar';
import Cards from '../Cards';
import CardSingle from '../CardsSingle';
class Landing extends Component {

    render() {
        return (
            <div>
	            <div>
	            	<Navbar />
            	</div>
            	<div>
	            	<CardSingle />
            	</div>
            </div>
        );
    }
}

export default Landing;
