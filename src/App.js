import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './App.css';
import { useStyles } from './App.styles';
import NavBar from './NavBar/NavBar';
import Home from './Content/Home';
import Experience from './Content/Experience';
import Projects from './Content/Projects';
import Contact from './Content/Contact';

function App() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item>
                <h1>Nathan Escandor</h1>
            </Grid>
            <Router>
                <Grid item container>
                    <NavBar />
                </Grid>
                
                <Switch>
                    <Route path='/experience'><Experience /></Route>
                    <Route path='/projects'><Projects /></Route>
                    <Route path='/contact'><Contact /></Route>
                    <Route path='/'><Home /></Route>
                </Switch>
            </Router>   
        </Grid>
    );
}

export default App;
