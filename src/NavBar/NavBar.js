import * as React from 'react';
import { useStyles } from './NavBar.styles';
import NavBarItem from './NavBarItem/NavBarItem';
import { Grid } from '@material-ui/core';

function NavBar() {
    const classes = useStyles();

    return(
        <>
            <Grid container className={classes.root}>
                <nav className={classes.navBar}>
                    <Grid item className={classes.item}>
                        <NavBarItem name="Home" link="/"/>
                    </Grid>
                    <Grid item className={classes.item}>
                        <NavBarItem name="Experience" link="/experience"/>
                    </Grid>
                    <Grid item className={classes.item}>
                        <NavBarItem name="Projects" link="/projects"/>
                    </Grid>
                    <Grid item className={classes.item}>
                        <NavBarItem name="Contact" link="/contact"/>
                    </Grid>
                </nav>
            </Grid>
        </>
    );
};

export default NavBar;
