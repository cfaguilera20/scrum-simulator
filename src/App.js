import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

const asyncResults = asyncComponent(() => {
    return import('./containers/Results/Results');
});

const asyncSurveyViewer = asyncComponent(() => {
    return import('./containers/SurveyViewer/SurveyViewer');
});

class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/results" component={asyncResults} />
                <Route path="/survey" component={asyncSurveyViewer} />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        );

        return <Layout>{routes}</Layout>;
    }
}

export default withRouter(connect(null)(App));
