import { createStyles, makeStyles } from '@material-ui/core';

export const styles = (theme) => createStyles({
    root: {
        margin: '2em',
    },
    icon: {
        margin: '0.5em',
        maxHeight: '128px',
        maxWidth: '128px',
    },
});

export const useStyles = makeStyles(styles);
