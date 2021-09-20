import React, { Component } from 'react';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';
import Facebook from './components/Facebook';
import Welcome from './Welcome'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  import {
    button,
    buttonText,
    icon
  } from './components/Login.css'

  
export default class Contact extends Component {
    render() {

        return (
            <div align="center">
                <h1>
                    Log In
                </h1>
                <img src="./icons/Line.png" className="line"></img>
                <form align="left" className="sign-form">
                    <label> 
                    <b>Username:</b>
                        <input type="text" className="field" name="uname" />
                    </label>
                    <br></br>
                    <label>
                    <b>Password:</b>
                        <input type="password" className="field" name="password" />
                    </label>
                   
                </form>
                <p>Log In with</p>
                <div align="center">
                    <LoginHooks />
                    <LogoutHooks />
                    <Facebook />
                    
                </div>
                <br></br>
                <Link to="/welcome" className="reg-btn" value="Log In">Log In</Link>
                    
                
                <p>Don't have an account yet? <br></br> Sign Up <b><Link to="/signup" style={{ textDecoration: 'none' }}>here</Link></b></p>
            </div>
        )
    }
}
