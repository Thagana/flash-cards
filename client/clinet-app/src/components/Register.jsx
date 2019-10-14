import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from './functions/registerUser';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	username: '',
        	email: '',
        	password : '',
          confirmPass: '',
          error: false,
          errorMessage: '',
        	hasCorrectLenght: false,
        	isActiveTyping: false,
          isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const { username , email, password } = this.state;
        const user = {
          username : username,
          password: password,
          email: email
        };

        this.setState({ isLoading: true })
        registerUser(user)
                    .then((response) => {
                      console.log(response);
                      if(response.error){
                        if(response.error.userError){
                          this.setState({ error: true, errorMessage: response.error.userError })
                        }
                        if(response.error.fieldError){
                          this.setState({ error: true, errorMessage: response.error.fieldError })
                        }
                      }
                      if(response.success){
                        this.setState({ error: false, isLoading: false })
                        this.props.history.push(`/login`)
                      }
                    }).catch((error) => {
                      console.log(error);
                    })
    }

    onClick(){
        this.props.history.push(`/`)
    }
    render() {
        return (
            <div>
            <div className="header">
                  <h3 className="has-text-centered" style={{ 'color': 'aqua' }}>REGISTER TODAY!</h3>
                  <div className="header-wrapper">
                     <div className="back-btn" style={{ 'curser' : 'pointer' }}>
                         <i className="fa fa-arrow-left" onClick={this.onClick.bind(this)}></i>
                     </div>
                     <div className="header-text">
                         <div>
                             <i className="fa fa-map-marker-alt"></i>
                         </div>
                     </div>
                     <div>
                         <p style={{ 'padding': '10px' }}>
                              <Link to="/login" className="link">
                              LOGIN
                              </Link>
                         </p>
                     </div>
                  </div>
                  <hr />
              </div>
               <div className="container form-container">
                   <form onSubmit={this.onSubmit}>
                       <div>
                           <p className="has-text-centered" style={{ 'fontWeight': 'bold', 'color': 'red' }}>
                               { this.state.error ? this.state.errorMessage : '' }
                           </p>
                       </div>
                       <div className="field">
                           <label className="label">Username</label>
                           <input type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    className="input"
                                    placeholder="Username"
                                    required={true}
                             />
                       </div>
                       <div className="field">
                           <label className="label">Email</label>
                           <input type="eamil"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    className="input"
                                    placeholder="Username"
                                    required={true}
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
                                   required={true}
                                   />
                       </div>
                      
                       <div className="login-btn">
                           <button className="button is-primary  has-text-centered button-add">REGISTER</button>
                       </div>
                   </form>
               </div>
           </div>
        );
    }
}

export default Register;
