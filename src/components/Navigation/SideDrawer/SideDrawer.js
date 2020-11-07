import React, { Component } from 'react';

import classes from './SideDrawer.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sidedrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Closed];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>       
            </div>      
        </Aux>
    )
}

export default sidedrawer;