import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './VictoriaHealth.module.css';

import HLHome from '../../../assets/images/HLHome.png';

class VictoriaHealth extends Component {
    goToSite = () => {
        window.open('https://www.VictoriaHealth.co.uk/winsor-newton-professional-acrylic-colour/', '_blank').focus();
    }
    render () {
        return (
            <div className={classes.VictoriaHealth}>
                <h1>Victoria Health</h1>
                <section className={classes.Section}>
                    <h2>Project Overview</h2>
                    <hr />
                    <p>
                      Victoria Health is an online health retailer..... This project called for a complete redesign of their homepage.
                    </p>
                    <p>
                      The client requested a range of customisable widgets that could be utilised through the BigCommerce Content Management System - Page Builder
                    </p>
                    <p>
                        This required the development of flexible content blocks, each with a unique function. For example: Hero Header, Product Carousel, Email Sign Up
                    </p>
                </section>
                <section>
                    <div className={classes.Big} style={{width: "80%", margin: "0 auto", position: "relative"}}>
                        <img src={HLHome} style={{
                            width: "100%"
                        }} alt="VictoriaHealth homepage"/>
                        <div className={classes.Overlay} onClick={this.goToSite}>
                            <a href="https://www.VictoriaHealth.co.uk/winsor-newton-professional-acrylic-colour/">Visit Site</a>
                        </div>
                    </div>
                    <a className={classes.Small} style={{color: "black", textDecoration: "underline", fontSize: "1em"}} href="https://www.hanlearn.co.uk">Visit Site</a>            
                </section>
            </div>
        );
    }
};

export default withRouter(VictoriaHealth);