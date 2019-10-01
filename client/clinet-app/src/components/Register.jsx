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
        	isActiveTyping: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const { username , email, password } = this.state;
        const user = {
          username : username,
          password: password,
          email: email
        };

        registerUser(user)
                    .then((response) => {
                      if(response.fieldError){
                        this.setState({ error: true, errorMessage : response.fieldError })
                      }else if(response.userError){
                        this.setState({ error: true, errorMessage: response.userError })
                      }else if(response.success){
                        this.setState({  error: true, errorMessage: response.success })
                      }else{
                        this.setState({ error: true, errorMessage: 'Something went wrong!' })
                      }
                    }).catch((error) => {
                      console.log(error);
                    })
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
                           <button className="button is-primary  has-text-centered button-add">REGISTER</button>
                       </div>
                   </form>
               </div>
           </div>
        );
    }
}

export default Register;
