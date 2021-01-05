import { createStyles, makeStyles } from '@material-ui/core';

export const styles = (theme) => createStyles({
    root: {
        width: '100%',
        height: '100%',
        maxHeight: '400px',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    textBox: {
        margin: '0.5em',
        height: '300px',
        width: '225px',
        resize: 'none',
        textTransform: 'uppercase',
    },
});

export const useStyles = makeStyles(styles);
