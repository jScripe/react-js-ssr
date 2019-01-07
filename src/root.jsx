import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import StartPage from './components/start-page';
import FilmPage from './components/film-page';
import SearchPage from './components/search-page';
import PageNotFound from './components/page-not-found';


const Root = ({
    Router,
    location,
    context,
    store
}) => (
    <Provider store={ store }>
        <Router location={ location } context={ context }>
            <Switch>
                <Route path='/' component={ StartPage } exact={ true } />
                <Route path='/search/' exact={ true } component={ SearchPage } />
                <Route path='/film/:filmid' exact={ true } component={ FilmPage } />
                <Route component={ PageNotFound } />
            </Switch>
        </Router>
    </Provider>
);

Root.propTypes = {
    Router: PropTypes.func,
    location: PropTypes.string,
    context: PropTypes.objectOf(),
    store: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.func
        ])
    )
};


export default hot(module)(Root);
