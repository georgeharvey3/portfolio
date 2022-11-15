import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Kollect.module.css';

import KollectImg from '../../../assets/images/Kollect.png';

class Kollect extends Component {
    goToSite = () => {
        window.open('https://www.kollect.ie', '_blank').focus();
    }
    render () {
        return (
            <div className={classes.Kollect}>
                <h1>Kollect</h1>
                <section className={classes.Section}>
                    <h2>Project Overview</h2>
                    <hr />
                    <p>
                      Kollect is an Irish waste collection company that approached our agency to build them an online platform on which users could request their services.
                    </p>
                    <p>
                      The result was a bespoke application with a 'questionnaire' React app which tailored the website's suggestions to the user based on their answers.
                    </p>
                    <p>
                        Store admins are able to customise the answers and corresponding suggestions in through a backend app in their BigCommerce admin area.
                    </p>
                </section>
                <section>
                    <div className={classes.Big} style={{width: "80%", margin: "0 auto", position: "relative"}}>
                        <img src={KollectImg} style={{
                            width: "100%"
                        }} alt="Kollect homepage"/>
                        <div className={classes.Overlay} onClick={this.goToSite}>
                            <a href="https://www.Kollect.co.uk/winsor-newton-professional-acrylic-colour/">Visit Site</a>
                        </div>
                    </div>
                    <a className={classes.Small} style={{color: "black", textDecoration: "underline", fontSize: "1em"}} href="https://www.hanlearn.co.uk">Visit Site</a>            
                </section>
            </div>
        );
    }
};

export default withRouter(Kollect);