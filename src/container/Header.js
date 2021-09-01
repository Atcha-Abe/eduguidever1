import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom'
export default class About extends Component {
    render() {

        return (
           <div>
               <img src="./Logo192.png" />
               <ul className="menu-ul">
                   <li><Link to="/home" style={{ textDecoration: 'none' }} >Home</Link></li>
                   <li><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></li> 
                   <li><Link to="/blogs"style={{ textDecoration: 'none' }}>Blogs</Link></li> 
                   <li><Link to="/faqs"style={{ textDecoration: 'none' }}>FAQs</Link></li> 
                   <li><Link to="/community"style={{ textDecoration: 'none' }}>Community</Link></li> 
                   <li><Link to="/contact"style={{ textDecoration: 'none' }}>Contact</Link></li> 
                   <div className="login-item">
                   <li><Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link></li> 
                   <li><Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link></li> 
                </div> 
               </ul>
               
           </div>
        )
    }
}

