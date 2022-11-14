import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './CassArt.module.css';

import HLHome from '../../../assets/images/HLHome.png';

class CassArt extends Component {
    goToSite = () => {
        window.open('https://www.cassart.co.uk/winsor-newton-professional-acrylic-colour/', '_blank').focus();
    }
    render () {
        return (
            <div className={classes.CassArt}>
                <h1>CassArt</h1>
                <section className={classes.Section}>
                    <h2>Project Overview</h2>
                    <hr />
                    <p>
                      Cass Art is the UK's leading online art supplies retailer. This project was a complete redesign of their online store and presented many unique challenges along the way.
                    </p>
                    <p>
                      One particularly tricky part of the project was the product display page (PDP). Some of their products had many more variants than the platform limit and required an involved solution using bespoke Google Cloud Platform functions.
                    </p>
                    <p>
                        Custom JavaScript was implemented to create a 'colour picker', where users could choose their desired colour and size for paint products.
                    </p>
                </section>
                <section>
                    <div className={classes.Big} style={{width: "80%", margin: "0 auto", position: "relative"}}>
                        <img src={HLHome} style={{
                            width: "100%"
                        }} alt="CassArt homepage"/>
                        <div className={classes.Overlay} onClick={this.goToSite}>
                            <a href="https://www.cassart.co.uk/winsor-newton-professional-acrylic-colour/">Visit Site</a>
                        </div>
                    </div>
                    <a className={classes.Small} style={{color: "black", textDecoration: "underline", fontSize: "1em"}} href="https://www.hanlearn.co.uk">Visit Site</a>            
                </section>
            </div>
        );
    }
};

export default withRouter(CassArt);