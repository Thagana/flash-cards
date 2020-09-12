import React, { Component} from 'react';
import './login-form.scss';
import axios from 'axios';


export default function Login (){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const loginUser = async () => {
        const user = { username, password }
        const login = await fetch('http://localhost:4000/api/v1/users/login', {
        method: 'POST',    
        data:  {
                username: user.username,
                password: user.password
            }
        });
        console.log(login);
    }   
    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
        return (
            <div className="login-container">
            	<div className="header-conatiner">
                    <div className="header-text-container">
                        <h3 className="header">Welcome Back</h3>
                    </div>
                </div>
                <div className="form-container">
                    <form>
                        <div className="form-conatiner-field">
                           <div className="feild">
                               <div className="control">
                               <label>Username</label>
                                <input type="text"  placeholder="Username" value={username} onChange={handleUsername} className="input fields"/>
                               </div>
                           </div>
                        </div>
                        <div className="form-conatiner-feild">
                           <div className="feild">
                               <div className="control">
                               <label>Password</label>
                                <input type="password"  placeholder="Password" value={password} onChange={handlePassword} className="input fields"/>
                               </div>
                           </div>
                        </div>
                    </form>
                        <div className="form-conatiner-button">
                           <div className="field-button">
                               <div className="control-button">
                                   <button className="button is-block" onClick={loginUser}>Login</button>
                               </div>
                           </div>
                        </div>
                </div>
            </div>
        );
}

