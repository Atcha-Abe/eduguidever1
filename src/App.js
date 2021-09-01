import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Blogs from './Blogs'
import Welcome from './Welcome'
import FAQs from './FAQs'
import Community from './Community'
import Contact from './Contact'
import SignUp from './SignUp'
import Header from '../src/container/Header'
import LogIn from './LogIn'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component {
    render() {

        return (
           <Router>
             <div>
              <Header /> 
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/welcome" component={Welcome} />
              <Route path="/contact" component={Contact} />
              <Route path="/faqs" component={FAQs} />
              <Route path="/community" component={Community} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
             </div>
           </Router>
        )
    }
}

export default App;
