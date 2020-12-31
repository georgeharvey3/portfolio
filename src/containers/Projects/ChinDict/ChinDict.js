import React, { Component } from 'react';

import classes from './ChinDict.module.css';

import CDpy from '../../../assets/images/chin-dict.png';

class ChinDict extends Component {
    goToSite = () => {
        window.location.href = "https://pypi.org/project/chin-dict/"
    }
    render () {
        return (
            <div className={classes.ChinDict}>
                <section>
                    <h1>chin-dict library</h1>
                    <p>I wanted a convenient way to learn more about the roots of Chinese characters, so created this Python library to quickly decompose characters into their base components on the command line.</p>
                </section>
                <section>
                    <div className={classes.Big} style={{width: "80%", margin: "0 auto", position: "relative"}}>
                        <img src={CDpy} style={{
                            width: "100%"
                        }} alt="pypi project img"/>
                        <div className={classes.Overlay} onClick={this.goToSite}>
                            <a href="https://pypi.org/project/chin-dict/">View Project</a>
                        </div>
                    </div>
                    <a className={classes.Small} style={{color: "black", textDecoration: "underline", fontSize: "1em"}} href="https://pypi.org/project/chin-dict/">View Project</a>                        
                </section>
            </div>
        )
    }
}

export default ChinDict;