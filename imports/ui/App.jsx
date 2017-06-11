import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Menu from './Menu'
import CategoryList from './CategoryList';

import theme from '../api/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

export default ({main, routeProps}) => {
    // main represents the component to render passed from the router
    // route props represent the properties that it receives from the router

    // where we do createElement, that's where your components will get rendered.
    return (
        <div id="app">
            <ThemeProvider theme={theme}>
                {React.createElement(main, routeProps)}
            </ThemeProvider>
        </div>
    )
};