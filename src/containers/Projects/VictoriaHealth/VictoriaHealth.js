import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './VictoriaHealth.module.css';

import VictoriaHealthImg from '../../../assets/images/VictoriaHealth.png';

class VictoriaHealth extends Component {
    goToSite = () => {
        window.open('https://www.VictoriaHealth.com', '_blank').focus();
    }
    render () {
        return (
            <div className={classes.VictoriaHealth}>
                <h1>Victoria Health</h1>
                <section className={classes.Section}>
                    <h2>Project Overview</h2>
                    <hr />
                    <p>
                      Victoria Health is an online health and wellbeing retailer. This project was for a complete redesign of their homepage.
                    </p>
                    <p>
                      The client requested a range of customisable widgets that could be utilised through the BigCommerce CMS - Page Builder.
                    </p>
                    <p>
                        This required the development of flexible content blocks, each with a unique function. Some examples of widgets we developed are the Hero Banner, Product Carousel and Email Sign Up Widget.
                    </p>
                </section>
                <section>
                    <div className={classes.Big} style={{width: "80%", margin: "0 auto", position: "relative"}}>
                        <img src={VictoriaHealthImg} style={{
                            width: "100%"
                        }} alt="VictoriaHealth homepage"/>
                        <div className={classes.Overlay} onClick={this.goToSite}>
                            <a href="https://www.VictoriaHealth.com">Visit Site</a>
                        </div>
                    </div>
                    <a className={classes.Small} style={{color: "black", textDecoration: "underline", fontSize: "1em"}} href="https://www.hanlearn.co.uk">Visit Site</a>            
                </section>
            </div>
        );
    }
};

export default withRouter(VictoriaHealth);