import React, { Component } from 'react';

import classes from './Home.module.css';

import Me from '../../assets/images/Me.png';

class Home extends Component {
    render () {
        return (
            <div className={classes.Home}>
                <h1>George Harvey - Graduate Developer, Birmingham UK </h1>
                <hr style={{width: "90%"}} />
                <img src={Me} alt="me"/>
                <section className={classes.Section}>
                    <h3>About</h3>
                    <p>Hi there! I'm George, a student studying for an MSc in Computer Science at the University of Birmingham. I have a passion for life-changing software that connects users with data in a seemless and engaging way. On this website you can see a few of the projects I have worked on, get a taste for how I code and get in touch! Thanks for stopping by.</p>
                </section>
                <section className={classes.Section}>
                    <h3>Strengths</h3>
                    <p>I have experience with front and back end technologies, here are some of the languages I speak:</p>
                    <ul style={{width: "fit-content", textAlign: "left"}}>
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SQL</li>
                    </ul>
                    <p>Some of the technologies I have worked with:</p>
                    <ul style={{width: "fit-content", textAlign: "left"}}>
                        <li>ReactJS</li>
                        <li>Flask</li>
                        <li>SQLAlchemy</li>
                        <li>PostgreSQL</li>
                        <li>Heroku</li>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ul>
                </section>
                <section className={classes.Section}>
                    <h3>Hobbies</h3>
                    <p>When I am not writing code, you're most likely to find me doing one of the following:</p>
                    <ul>
                        <li>
                            <h3>Learning languages</h3>
                            <p>Currently, I'm 2 years into Mandarin Chinese and 10 years into Spanish.</p>
                            <p>Along the way I have also tried my hand at German, Russian, Romanian and Japanese, with mixed results!</p>
                        </li>
                        <li>
                            <h3>Playing music</h3>
                            <p>I've been playing classical/folk music on the acoustic guitar and jazz/blues on the piano from a young age.</p>
                            <p></p>
                        </li>
                        <li>
                            <h3>Drinking tea</h3>
                            <p>I've been fascinated by traditional Chinese tea culture for several years now, I even have a tasting blog <a href="https://leafandliquor.wordpress.com/">here</a>.</p>
                        </li>
                    </ul>
                </section>
            </div>
            
        )
    }
}

export default Home;