import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { render } from 'react-dom';

import {Meteor} from 'meteor/meteor';

import App from '../imports/ui/App';
import Menu from '../imports/ui/Menu';
import Index from '../imports/ui/Index'
import CategoryList from '../imports/ui/Category/CategoryList'


import theme from '../imports/api/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

const browserHistory = createBrowserHistory();

Meteor.startup(() => {
    render(
        <Router history={browserHistory}>
            <div className="container">
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/category" component={CategoryList}/>
                </Switch>
            </div>
        </Router>

        , document.getElementById("render-target"));
});