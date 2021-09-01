import React, { Component } from 'react';
import Authors from './Authors'
import System from './System'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
export default class About extends Component {
    render() {

        return (
            <div>
                <Router>
                <div  className="about-link">
                    <li><Link to="/authors" className="menu-ul" style={{ textDecoration: 'none' }}>Authors</Link></li>
                    <li><Link to="/system" className="menu-ul" style={{ textDecoration: 'none' }}>System</Link></li>
                </div>
                    <Route path="/authors" component={Authors} />
                    <Route path="/system" component={System} />
                </Router>
           </div>
        )
    }
}

