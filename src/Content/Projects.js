import * as React from 'react';
import { Grid, Divider } from '@material-ui/core';

function Projects() {
    return(
        <>
            <h1>Current Projects</h1>
            <Grid item>
                <p>
                    At the moment, I'm playing with projects in a couple of different areas and trying to see if anything sticks out to me. In particular, I'm working through some O'Reilly Python Data Science books, mlcourse.ai, and playing around with an Arduino Uno to learn some embedded software. I'm also in the planning stages of some hobby-related websites (skateboarding and DJing), and working on updating + improving this site :) 
                </p>
            </Grid>
            <Grid item>
                <Divider/>
            </Grid>
            <h1>Past Projects</h1>
            <Grid item>
                <h2>Central-Dogma : October 2019</h2>
                    <p>
                        Central-Dogma is a little package that I wrote to practice my JS skills and learn about npm packages. It's used to convert DNA sequences to RNA and then to Amino Acids.
                    </p>
                    <p>
                        In the future, I'd like to use my recently acquired experience to refactor it to fit modern EcmaScript methods.
                    </p>
                    <p><a href="https://github.com/NathanEscandor/codon">GITHUB REPO</a> | <a href="https://www.npmjs.com/package/central-dogma">NPM PAGE</a></p>
                <br /><br />
            </Grid>
        </>
    );
};

export default Projects;
