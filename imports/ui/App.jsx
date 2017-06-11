import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Menu from './Menu'
import CategoryList from './CategoryList';
import Index from './Index';

import theme from '../api/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

export default ({main, routeProps}) => {
    console.log(main);
    console.log(React.createElement(main, routeProps));

    return (
        <div id="app">
            <ThemeProvider theme={theme}>
                <Menu/>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                {React.createElement(main, routeProps)}
            </ThemeProvider>
        </div>
    )
};