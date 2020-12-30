import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import GitHub from '../../assets/images/github.png';
import LinkedIn from '../../assets/images/linkedin.png';

class Contact extends Component {
    render () {
        return (
            <Aux>
                <h1>Contact</h1>
                <p>I am currently studying full time at university, but actively seeking opportunities starting September 2021.</p>
                <p>Email: georgeharvey3 AT hotmail.com</p>
                <a href="https://github.com/georgeharvey3"><img src={GitHub} style={{height: "40px"}} /></a>
                <a href="https://www.linkedin.com/in/george-harvey-535246190/"><img src={LinkedIn} style={{height: "30px"}} /></a>
            </Aux>
        )
    }
}

export default Contact;