import React, { Component} from 'react';

class Register extends Component {


    constructor(props) {
        super(props);
        this.state = {
        	username: '',
        	email: '',
        	password : '',
        	hasCorrectLenght: false,
        	isActiveTyping: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    render() {
        return (
            <div>
            <div className="header">
                    <div className="header-wrapper">
                       <div className="back-btn">
                           <i className="fa fa-arrow-left"></i>
                       </div>
                       <div className="header-text">
                           <h3 className="has-text-centered" style={{ 'color': 'aqua' }}>WELCOME BACK</h3>
                       </div>
                    </div>
                   <hr />
               </div>
               <div className="container form-container">
                   <form onSubmit={this.onSubmit}>
                       <div className="field">
                           <label className="label">Username</label>
                           <input type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    className="input"
                                    placeholder="Username"
                             />
                       </div>
                       <div className="field">
                           <label className="label">Email</label>
                           <input type="text"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    className="input"
                                    placeholder="Username"
                             />
                       </div>
                       <div className="filed">
                           <label className="label">Password</label>
                           <input name="password"
                                   type="password"
                                   value={this.state.password}
                                   onChange={this.onChange}
                                   className="input"
                                   placeholder="Password"
                                   />
                       </div>
                      
                       <div className="login-btn">
                           <button className="button is-primary  has-text-centered button-add">LOGIN</button>
                       </div>
                   </form>
               </div>
           </div>
        );
    }
}

export default Register;
