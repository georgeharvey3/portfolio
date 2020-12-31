import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './HanLearn.module.css';

import HLHome from '../../../assets/images/HLHome.png';

class HanLearn extends Component {
    goToSite = () => {
        window.location.href = "https://www.hanlearn.co.uk";
    }
    render () {
        return (
            <div className={classes.HanLearn}>
                <h1>HanLearn</h1>
                <section className={classes.Section}>
                    <h2>Project Overview</h2>
                    <hr />
                    <p>
                        After learning Mandarin for several months, I found that most flashcard applications weren't geared towards learning Chinese. I decided to build my own using the features that I found the others lacked. When building a bank of words to learn, users can simply look the Chinese word up in HanLearn's dictionary, instead of having to manually input the pronunciation and translation. The app makes use of Hanzi Writer, a JavaScript library for practising writing characters. Also the app uses Google's WebSpeech API, so users can practise their speaking and listening skills when testing their word banks.
                    </p>
                </section>
                <section className={classes.Section}>
                    <h2>Technologies Used</h2>
                    <hr />
                    <p>
                        JavaScript - ReactJS, Redux
                    </p>
                    <p>
                        Python - Flask, SQLAlchemy
                    </p>
                </section>
                <section>
                    <div className={classes.Big} style={{width: "80%", margin: "0 auto", position: "relative"}}>
                        <img src={HLHome} style={{
                            width: "100%"
                        }} alt="HanLearn homepage"/>
                        <div className={classes.Overlay} onClick={this.goToSite}>
                            <a href="https://www.hanlearn.co.uk">Visit Site</a>
                        </div>
                    </div>
                    <a className={classes.Small} style={{color: "black", textDecoration: "underline", fontSize: "1em"}} href="https://www.hanlearn.co.uk">Visit Site</a>            
                </section>
            </div>
        );
    }
};

export default withRouter(HanLearn);