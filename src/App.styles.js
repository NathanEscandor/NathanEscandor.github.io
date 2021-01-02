import { createStyles, makeStyles } from '@material-ui/core';

export const styles = (theme) => createStyles({
    root: {
        maxWidth: '960px',
        alignItems: 'center',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
});

export const useStyles = makeStyles(styles);
