import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

import classes from './Home.module.css';

class Home extends Component {
    render () {
        return (
            <Aux className={classes.Home}>
                <h1>George Harvey - Graduate Developer, Birmingham UK </h1>
                <hr style={{width: "90%"}} />
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
                    <p>When I am not writing code, you're most likely to find me learning a foreign lanugage or playing music. Currently I am two years into learning Mandarin and ten or so years into learning Spanish. Along the way I have also tried my hand at German, Russian, Romanian and Japanese, with mixed results! As for music, I've played both piano and guitar since a young age and have a particular interest in folk music from around the world.</p>
                </section>
            </Aux>
            
        )
    }
}

export default Home;