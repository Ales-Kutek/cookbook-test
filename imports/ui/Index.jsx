import React, { Component, PropTypes } from 'react';
import Menu from './Menu'
import CategoryList from './CategoryList';

import theme from '../api/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import route from '/imports/routing/router.js';

export default class Index extends Component {
    render() {
        return(
            <div>
                <Menu/>
            </div>
        )
    }
}