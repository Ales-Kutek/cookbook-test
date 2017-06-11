import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Route, Router, Switch } from 'react-router';
// import { BrowserRouter as Router } from 'react-router-dom'

import history from '../api/history';

import Menu from './Menu'
import Layout from './Layout'

import Index from './Index'
import CategoryList from './Category/CategoryList'

import theme from '../api/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Menu/>
                    <Route exact path="/" component={Index}/>
                    <Route path="/category" component={CategoryList}/>
                </Switch>
            </Router>
        )
    }
}

export default createContainer((object) => {
    return {

    };

}, App);