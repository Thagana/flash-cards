import React from 'react';
import moment from 'moment';

class Card extends React.Component {

    render() {
        return (
	        	<div className="card">
		        	  <header className="card-header">
		        	    <p className="card-header-title">
		        	      {this.props.title}
		        	      <time dateTime="2016-1-1" style={{ 'padding': '5px' }}>{moment(this.props.date,'YYYYMMDD').fromNow()}</time>
		        	    </p>
		        	    <a href="#" className="card-header-icon" aria-label="more options">
		        	      <span className="icon">
		        	        <i className="fas fa-angle-down" aria-hidden="true"></i>
		        	      </span>
		        	    </a>
		        	  </header>
		        	  <div className="card-content">
		        	    <div className="content">
		        	      { this.props.cardFront }
		        	    </div>
		        	  </div>
		        	  <footer className="card-footer">
		        	    <a href="#" className="card-footer-item">Rate</a>
		        	    <a href="#" className="card-footer-item">Edit</a>
		        	    <a href="#" className="card-footer-item">Delete</a>
	        	  </footer>
	        	</div>
        );
    }
}

export default Card;
