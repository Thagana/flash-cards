import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { userLogin } from './functions/userLogin';
import { Authentication } from './functions/authentication';
import SuccessAnimate from './Animations/SuccessFeedBack';
import { Link } from 'react-router-dom';
import './styles/login-form.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	username: '',
        	password: '',
        	error: false,
          success: false,
        	errorMessage: '',
        	successMessage : ''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const { username, password } = this.state;
        const user = {
            username : username,
            password : password
        }

        if(!username || !password){
            this.setState({ error: true, errorMessage: 'Either Fields cannot be empty' })
        }else{
            userLogin(user)
                    .then((response) => {
                        // console.log(response)
                        if(response.success){
                            this.setState({ successMessage: response.success, success: true })
                            localStorage.setItem('usertoken', response.success.token);
                            this.onSuccess();
                            
                        }
                        if(response.userError){
                            this.setState({ errorMessage : response.userError, error: true })
                        }
                        if(response.authError){
                            this.setState({ errorMessage : response.authError, error: true })
                        }
                           
                    }).catch(error => console.error(error));
        }

    }

    onUsernameChange(e){

        if(!e.target.value){
            this.setState({ errorMessage: 'Username Field cannot be empty!', error: true })
        }

        this.setState({ username: e.target.value });
    }

    onPasswordChange(e){

        if(!e.target.value){
            this.setState({  errorMessage : 'Password Field cannot be empty', error: true })
        }
        this.setState({ password : e.target.value });

    }
    onClick(){
        this.props.history.push(`/`)
    }

    showModal(){
          const node = ReactDOM.findDOMNode(this);
          if (node instanceof HTMLElement) {
                const modal = document.querySelector('.modal');
                modal.classList.add("is-active");
         }
         
    }

    closeModal(){
          const node = ReactDOM.findDOMNode(this);
          if( node instanceof HTMLElement){
                const modal = document.querySelector(".modal");
                modal.classList.remove('is-active');
                Authentication.authenticate(() => { 
                    this.props.history.push(`/`);
                 })
          }
    }

    onSuccess(){
        const { success } = this.state;
        if(success){
            this.showModal();
        }
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
                                     onChange={this.onUsernameChange.bind(this)}
                                     className="input"
                                     placeholder="Username"
                              />
                        </div>
                        <div className="filed">
                            <label className="label">Password</label>
                            <input name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onPasswordChange.bind(this)}
                                    className="input"
                                    placeholder="Password"
                                    />
                        </div>
                       
                        <div className="login-btn">
                            <button className="button is-primary  has-text-centered button-add">LOGIN</button>
                        </div>
                    </form>
                </div>

                <div className="container" id="modal-container">
                  <div className="modal">
                    <div className="modal-background"></div>
                    <div className="modal-content">
                      <SuccessAnimate />
                    </div>
                    <button className="modal-close"  onClick={this.closeModal.bind(this)}></button>
                  </div>
                  <p>
                  </p>
                </div>

            </div>
        );
    }
}

export default Login;
