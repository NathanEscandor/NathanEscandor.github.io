import * as React from 'react';
import { Grid, Divider } from '@material-ui/core';

function Projects() {
    return(
        <>
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
