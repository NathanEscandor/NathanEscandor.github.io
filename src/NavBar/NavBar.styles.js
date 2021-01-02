import { createStyles, makeStyles } from '@material-ui/core';

export const styles = (theme) => createStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },    
});

export const useStyles = makeStyles(styles);
