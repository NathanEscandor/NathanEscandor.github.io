import * as React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './NavBarItem.styles';

function NavBarItem(props) {
    const classes = useStyles();

    return(
        <>
            <div className={classes.root}>
                <Link to={props.link}>
                    {props.name}
                </Link>
            </div>
        </>
    );
};

export default NavBarItem;
