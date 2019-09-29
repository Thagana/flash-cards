import React, { Component} from 'react';
import './styles/add-form.css';

class AddCard extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	title: '',
	  	front: '',
	  	back: ''
	  };
	}
	onSubmit(e){

	}
	onChange(e){

	}
    render() {
        return (
            <div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<div>
						<label>Title</label>
						<input type="text"
								 name="title"
								 value={this.state.title}
								 onChange={this.onChange.bind(this)}
								 className="input"
						  />
					</div>
					<div>
						<label>Front (Question)</label>
						<input name="front"
								type="text"
								value={this.state.front}
								onChange={this.onChange.bind(this)}
								className="input"
								/>
					</div>
					<div>
						<label>Back (Answer)</label>
						<textarea name="back"
								  value={this.state.back}
								  onChange={this.onChange.bind(this)}
								  className="textarea"
								  />
					</div>
					<div className="button-container">
						<button className="button is-primary  has-text-centered button-outline">Add Card</button>
					</div>
				</form>            	
            </div>
        );
    }
}

export default AddCard;
