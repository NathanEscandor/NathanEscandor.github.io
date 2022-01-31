import { createStyles, makeStyles } from '@material-ui/core';

export const styles = (theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    textBox: {
        margin: '12px',
        maxWidth: '550px',
        lineHeight: '1.5em',
    },
    image: {
        margin: '12px',
        minWidth: '350px',
    },
});

export const useStyles = makeStyles(styles);
