import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
const Login = () => {
    return(
        <div className="big-login-container">
            <div className="small-login-container">
                <h1>Login</h1>
                <div className="line"></div>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Password"></input>
                <div className="buttons">
                    <input type="submit" value="Login"></input>
                    <input type="submit" className="signup" value="Sign Up"></input>
                </div>
            </div>
        </div>
    );
}

export default Login;