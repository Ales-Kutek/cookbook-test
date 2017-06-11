import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Menu from './Menu'

import theme from '../api/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

export default ({main, routeProps}) => {
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