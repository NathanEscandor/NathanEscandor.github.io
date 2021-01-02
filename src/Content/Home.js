import * as React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './Home.styles';
import homePhoto from './homephoto.jpg';
function Home() {
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid item className={classes.image}>
                <img src={homePhoto} alt="Nathan and Chester" />
            </Grid>
            <Grid item className={classes.textBox}>
                <p>
                    Hi! I'm Nathan.<br /><br />

                    I'm a software developer based out of Calgary, AB currently focusing on front end web development.<br /><br />
                    Right now, I'm working on a team at Seequent to translate a desktop application into a TypeScript/React webapp.<br /><br />
                    In the past, I've worked as a student researcher in Dr. A. P. Jason de Koning's Bioinformatics lab, and at Arterys as a junior developer.<br /><br />
                    When I'm not working on React components, I like to play music, go skateboarding, and play with my cats; Chester and Pretzel.
                </p>
            </Grid>
        </Grid>
    );
};

export default Home;
