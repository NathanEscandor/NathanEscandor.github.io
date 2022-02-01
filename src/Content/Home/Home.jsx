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

                    I'm a software developer based out of Calgary, AB. Most of my experience is in web development, but I'm interested in learning more about data engineering and embedded software.<br /><br />
                    I recently worked at Seequent Kensington as a software developer on their frontend (TypeScript/React) and backend (Python) teams to translate features from a desktop modeling application into a webapp.<br /><br />
                    In the past, I've worked as a student researcher in Dr. A. P. Jason de Koning's Bioinformatics lab, and at Arterys as a junior developer.<br /><br />
                    When I'm not working on software, I like to play music, videogames, go skateboarding, and spend time with my cats; Chester and Pretzel.
                </p>
            </Grid>
        </Grid>
    );
};

export default Home;
