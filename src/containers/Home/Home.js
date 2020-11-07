import React, { Component } from 'react';

import Aux from '../../hoc/Aux';

import classes from './Home.module.css';

class Home extends Component {
    render () {
        return (
            <Aux className={classes.Home}>
                <section className={classes.Section}>
                    <h1>George Harvey - Graduate Developer, Birmingham UK </h1>
                </section>
                <section className={classes.Section}>
                    <h3>About</h3>
                    <p>Anim incididunt ipsum dolor occaecat nisi et excepteur dolore eu eiusmod est ea sint. Quis aliqua cupidatat excepteur enim labore sint do ut sit ea amet ullamco. Quis elit esse in cillum occaecat pariatur. Mollit et consectetur irure ea Lorem sit.</p>
                </section>
                <section className={classes.Section}>
                    <h3>Strengths</h3>
                    <p>Amet ad pariatur culpa aliqua mollit officia. Magna nostrud excepteur irure mollit proident irure non eiusmod do. Sint elit deserunt non enim ipsum proident in cupidatat eiusmod qui sunt eu Lorem. Aute fugiat enim id aliqua ad minim id in ipsum laboris pariatur. Aliqua in non reprehenderit ut ut ad aliqua nostrud.</p>
                </section>
            </Aux>
            
        )
    }
}

export default Home;