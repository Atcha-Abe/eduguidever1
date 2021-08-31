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
                   <li><Link to="/home" >Home</Link></li>
                   <li><Link to="/about">About</Link></li> 
                   <li><Link to="/home">Blogs</Link></li> 
                   <li><Link to="/faqs">FAQs</Link></li> 
                   <li><Link to="/community">Community</Link></li> 
                   <li><Link to="/contact">Contact</Link></li> 
                   <li><Link to="/signup">Sign Up</Link></li> 
                   <div className="login-item">
                   <li><Link to="/login">Log In</Link></li> 
                   </div> 
               </ul>
           </div>
        )
    }
}

