import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { render } from 'react-dom';

import {Meteor} from 'meteor/meteor';

import App from '../imports/ui/App';

import theme from '../imports/api/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

const browserHistory = createBrowserHistory();

Meteor.startup(() => {
    render(
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>

        , document.getElementById("render-target"));
});