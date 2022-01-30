import * as React from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './Contact.styles';
import LinkedIn from './LinkedIn.png';
import Github from './Github.png';
import Mail from './Mail.png';
import Pdf from './Resume.pdf';

function Contact() {
    const classes = useStyles();

    return(
        <>
            <Grid item className={classes.root}>
                <a href="https://www.linkedin.com/in/nathan-escandor/" className={classes.icon}><img src={LinkedIn} alt=""/></a>
                <a href="https://www.github.com/nathanescandor/" className={classes.icon}><img src={Github} alt=""/></a>
                <a href="mailto:nathan.escandor@gmail.com" className={classes.icon}><img src={Mail} alt=""/></a>
            </Grid>
            <Grid item>
                <a href={Pdf} target="_blank" rel="noreferrer">Resume - Nathan Escandor</a>
            </Grid>
        </>
    );
};

export default Contact;
