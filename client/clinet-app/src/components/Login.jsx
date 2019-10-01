import React, { Component} from 'react';
import { userLogin } from './functions/userLogin';
import { Link } from 'react-router-dom';
import './styles/login-form.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	email: '',
        	password: '',
        	error: false,
        	errorMessage: '',
        	successMessage : ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const { username, password } = this.state;
        const user = {
            username : username,
            password : password
        }

        userLogin(user)
                .then((response) => {
                    if(response.fieldError){
                        this.setState({ errorMessage: response.fieldError, error: true })
                    }else if(response.userError){
                        this.setState({ errorMessage: response.userError, error: true })
                    }else if(response.authError){
                        this.setState({ errorMessage: response.authError, error: true })
                    }else{
                        this.setState({ successMessage : response.success })
                    }
                })
                .catch(error => console.log(error));
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    onClick(){
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
            	<div className="header">
                    <h3 className="has-text-centered" style={{ 'color': 'aqua' }}>WELCOME BACK</h3>
                    <div className="header-wrapper">
                       <div className="back-btn" style={{ 'curser' : 'pointer' }}>
                           <i className="fa fa-arrow-left" style={{ 'fontSize' : '20px' }} onClick={this.onClick.bind(this)}></i>
                       </div>
                       <div className="header-text">
                           <div>
                               <i className="fa fa-map-marker-alt"></i>
                           </div>
                       </div>
                       <div>
                           <p style={{ 'padding': '10px' }}>
                                <Link to="/register" className="link">
                                REGISTER
                                </Link>
                           </p>
                       </div>
                    </div>
                    <hr />
                </div>
                <div className="container form-container">
                        <div>
                            <p className="has-text-centered">
                                { this.state.error ? this.state.errorMessage : '' }
                            </p>
                        </div>
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

export default Login;
