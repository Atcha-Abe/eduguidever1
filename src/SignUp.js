import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom'
export default class SignUp extends Component {
    render() {

        return (
            <div align="center">
                <h1>
                    Create an Account
                </h1>
                <img src="./icons/Line.png" className="line"></img>
                <form align="left" className="sign-form">
                    <label> 
                    <b>Name:</b>
                        <input type="text" className="field" name="name" />
                    </label>
                    <br></br>
                    <label>
                    <b>Username:</b>
                        <input type="text" className="field" name="uname" />
                    </label>
                    <br></br>
                    <label>
                    <b>Level/Strand:</b>
                        <input type="text" className="field" name="levelstrand" />
                    </label>
                    <br></br>
                    <label>
                    <b>School: </b>
                        <input type="text" className="field" name="school" />
                    </label>
                    <br></br>
                    <label>
                    <b> Password: </b>
                        <input type="password" className="field" name="password" />
                    </label>
                </form>
                <p>Sign Up with</p>
                <div align="center">
                    <img src="./icons/Google.png" className="social-icons"></img>
                    <img src="./icons/Facebook.png" className="social-icons"></img>
                </div>
                <br></br>
                <Link to="/login" className="reg-btn" value="Sign Up">Sign Up</Link>
                <p>Already have an account? <br></br> Log In <b><Link to="/login" style={{ textDecoration: 'none' }} >here</Link></b></p>
          </div>
        )
    }
}
