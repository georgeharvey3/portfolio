import React from 'react';

import classes from './Toolbar.module.css';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <div className={classes.Internal}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <h2>GH</h2>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </div>
    </header>
)

export default toolbar;