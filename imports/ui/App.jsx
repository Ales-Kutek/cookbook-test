import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Route, Router, Switch } from 'react-router';

import history from '../api/history';

import Menu from './Menu'
import Layout from './Layout'

import Index from './Index'
import CategoryList from './Category/CategoryList'

import theme from '../api/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={browserHistory}>
                <div>
                    <Menu/>
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route exact path="/category" component={CategoryList}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default createContainer((object) => {
    return {

    };

}, App);