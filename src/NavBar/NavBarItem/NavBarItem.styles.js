import { createStyles, makeStyles } from '@material-ui/core';

export const styles = (theme) => createStyles({
    root: {
        margin: '10px',
    },
    item: {
        color: 'black',
        textDecoration: 'none',
    },
});

export const useStyles = makeStyles(styles);
