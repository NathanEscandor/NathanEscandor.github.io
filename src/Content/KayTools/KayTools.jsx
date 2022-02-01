import * as React from 'react';
import { Grid } from '@material-ui/core';
// import { useStyles } from './Home.styles';
function KayTools() {
    // const classes = useStyles();
    const [inputText, setInputText] = React.useState('');
    
    return(
        <Grid item container direction="column">
            <Grid item>
                <h1>Word tool!!</h1>
            </Grid>
                <input
                    name="email"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value.replace(/(\r\n|\n|\r)/gm, ""))}
                />

        <h3>{inputText}</h3>
    </Grid> 
    );
};

export default KayTools;
