import React from 'react'
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';

//yanked this code from https://javascript.plainenglish.io/how-to-setup-and-add-google-analytics-to-your-react-app-fd361f47ac7b
const RouteChangeTracker = ({ history }) => {

    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        ReactGA.send(location.pathname);
    });

    return <div></div>;
};

export default withRouter(RouteChangeTracker);