import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../hoc/Aux';

const navigationItems = props => {
    let navigationItems = (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/'>Home</NavigationItem>
            <NavigationItem link='/projects'>Projects</NavigationItem>
            <NavigationItem link='/contact'>Contact</NavigationItem>
        </ul>
    );

    return (
        <Aux>
            {navigationItems}
        </Aux>
    );
}

export default navigationItems;