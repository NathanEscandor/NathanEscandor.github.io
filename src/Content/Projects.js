import * as React from 'react';
import { Grid, Divider } from '@material-ui/core';
import CodonDemo from './CodonDemo/CodonDemo';

function Projects() {
    return(
        <>
            <Grid item>
                <h2>Central-Dogma : October 2019</h2>
                    <p>
                        Central-Dogma is a little package that I wrote to practice my JS skills and learn about npm packages. It's used to convert DNA sequences to RNA and then to Amino Acids.
                    </p>
                    <p>
                        I'd like to re-write the package to bring it up to date with current ES-262 methods but for now, here's a React demo showing some of its features!
                    </p>
                    <p><a href="https://github.com/NathanEscandor/codon">GITHUB REPO</a> | <a href="https://www.npmjs.com/package/central-dogma">NPM PAGE</a></p>
                <br /><br />
            </Grid>
            <Divider />
            <CodonDemo />
        </>
    );
};

export default Projects;
