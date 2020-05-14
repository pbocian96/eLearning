import React from 'react';
import './Register.css';

const Register = () => {
    return(
        <div className="big-register-container">
            <div className="small-register-container">
                <h1>Sign Up</h1>
                <div className="line"></div>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Surname"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Password"></input>
                <input type="text" placeholder="Repeat Password"></input>
                <div className="buttons">
                    <input type="submit" className="signup" value="Sign Up"></input>
                    <input type="submit" value="Go Back"></input>
                </div>
            </div>
        </div>
    );
}

export default Register;