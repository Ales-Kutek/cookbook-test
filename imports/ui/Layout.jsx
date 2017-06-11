import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { withRouter } from 'react-router'

import Menu from './Menu'
import Index from './Index'
import CategoryList from './Category/CategoryList'

import theme from '../api/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

class Wrapper extends Component {
    render() {
        return (
            <div>
                <Menu/>
                {this.props.children}
            </div>
        )
    }
}

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper children={this.props.children}>
            </Wrapper>
        )
    }
};

export default createContainer((object) => {
    return {

    };

}, Layout);