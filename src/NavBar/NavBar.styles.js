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
    item: {
        '&:hover': {
            backgroundColor: '#ddd9de',
        }
    }
});

export const useStyles = makeStyles(styles);
