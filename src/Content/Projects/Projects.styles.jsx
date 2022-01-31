import { createStyles, makeStyles } from '@material-ui/core';

export const styles = (theme) => createStyles({
    root: {
        margin: '2em',
    },
});

export const useStyles = makeStyles(styles);
