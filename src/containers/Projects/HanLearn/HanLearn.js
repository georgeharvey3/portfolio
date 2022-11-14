import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './HanLearn.module.css';

import HLHome from '../../../assets/images/HLHome.png';

class HanLearn extends Component {
    goToSite = () => {
        window.open('https://hanlearn.app', '_blank').focus();
    }
    render () {
        return (
            <div className={classes.HanLearn}>
                <h1>HanLearn</h1>
                <section className={classes.Section}>
                    <h2>Project Overview</h2>
                    <hr />
                    <p>
                        <p>After learning Mandarin for several months I found that most flashcard applications weren't geared towards learning Chinese, so I decided to build my own.</p>
                        <p>Users can build a bank of Chinese words they would like to memorise by looking up the Chinese word up in HanLearn's dictionary, instead of having to manually input the pronunciation and translation.</p>
                        <p>The app tests users by requiring them to enter the pinyin, meaning or character for various words in their bank.</p>
                        <p>In order to allow users to practise their speaking and listening skills, the app uses Google's WebSpeech API.</p>
                        <p>The app also makes use of Hanzi Writer, a JavaScript library for practising writing characters. </p>
                    </p>
                </section>
                <section>
                    <div className={classes.Big} style={{width: "80%", margin: "0 auto", position: "relative"}}>
                        <img src={HLHome} style={{
                            width: "100%"
                        }} alt="HanLearn homepage"/>
                        <div className={classes.Overlay} onClick={this.goToSite}>
                            <a href="https://hanlearn.app">Visit Site</a>
                        </div>
                    </div>
                    <a className={classes.Small} style={{color: "black", textDecoration: "underline", fontSize: "1em"}} href="https://www.hanlearn.co.uk">Visit Site</a>            
                </section>
            </div>
        );
    }
};

export default withRouter(HanLearn);