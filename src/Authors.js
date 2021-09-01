import React, { Component } from 'react';
export default class Authors extends Component {
    render() {

        return (
            <div>
            <h1>Meet the Team
            </h1>
            <p>EduGuide is a Career Decision Tool optimized to help you make a decision in finding the right program
            corresponding to your strengths, interest, and skills.</p>
            <div classname="devs-img" align="center">
                <img src="./icons/Atcha.png" className="devs"></img>
                <img src="./icons/Migs.png" className="devs"></img>
                <img src="./icons/Camille.png" className="devs"></img>
                <img src="./icons/Rob.png" className="devs"></img>
            </div>
            <ul className="names-ul">
                <li>ABE, Athena Aliafe </li>
                <li>CARABEO, Paolo Miguel</li>
                <li>MAHILUM, Frances Camille</li>
                <li>TUMULAK, Rob Joshua</li>
            </ul>
            <h6>Web Designers and Developers</h6>
            </div>
        )
    }
}

