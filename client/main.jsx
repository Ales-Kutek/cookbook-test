import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import App from '../imports/ui/App.jsx';

import theme from '../imports/api/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

Meteor.startup(() => {
    render(
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>

        ,document.getElementById('render-target'));
});