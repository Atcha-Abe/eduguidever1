import React, { Component } from 'react';
export default class SignUp extends Component {
    render() {

        return (
            <div>
                <h1>
                    Create an Account
                </h1>
                <form align="left" className="sign-form">
                    <label> 
                    <b>Name:</b>
                        <input type="text" name="name" />
                    </label>
                    <br></br>
                    <label>
                    <b>Username:</b>
                        <input type="text" name="uname" />
                    </label>
                    <br></br>
                    <label>
                    <b>Level/Strand:</b>
                        <input type="text" name="levelstrand" />
                    </label>
                    <br></br>
                    <label>
                    <b>School: </b>
                        <input type="text" name="school" />
                    </label>
                    <br></br>
                    <label>
                    <b> Password: </b>
                        <input type="text" name="password" />
                    </label>
                    <br></br>
                    <br></br>
                    <input type="submit" className="reg-btn" value="Sign Up" />
                </form>
          </div>
        )
    }
}
