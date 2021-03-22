import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './MealSelector.module.css';

import MSList from '../../../assets/images/meal-selector-list2.png';

class MealSelector extends Component {
    goToSite = () => {
        window.location.href = "https://georgeharvey3.github.io/meal-selector/";
    }
    render () {
        return (
            <div className={classes.MealSelector}>
                <h1>HanLearn</h1>
                <section className={classes.Section}>
                    <h2>Project Overview</h2>
                    <hr />
                    <p>
                        I wanted a simple and convenient way to create my weekly shopping lists without having to think of all the ingredients I would need and write them down individually. Since I tend to cook from a set repetoire of meals, I thought I would make a simple application to amalgamte their ingredients into a shopping list. The app works with local storage if you don't want to make an account, but I prefer to add meals to my bank on my laptop, then log in and create the list on my phone to take shopping with me.
                    </p>
                </section>
                <section className={classes.Section}>
                    <h2>Technologies Used</h2>
                    <hr />
                    <p>
                        JavaScript - ReactJS, Redux,
                        Google Firebase Realtime Database API
                    </p>
                </section>
                <section>
                    <div className={classes.Big} style={{width: "80%", margin: "0 auto", position: "relative"}}>
                        <img src={MSList} style={{
                            width: "100%"
                        }} alt="Meal Selector"/>
                        <div className={classes.Overlay} onClick={this.goToSite}>
                            <a href="https://georgeharvey3.github.io/meal-selector/">Visit Site</a>
                        </div>
                    </div>
                    <a className={classes.Small} style={{color: "black", textDecoration: "underline", fontSize: "1em"}} href="https://georgeharvey3.github.io/meal-selector/">Visit Site</a>            
                </section>
            </div>
        );
    }
};

export default withRouter(MealSelector);