import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Route, Router, Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Menu from './Menu'
import Index from './Index'
import CategoryList from './Category/CategoryList'
import CategoryDetail from "./Category/CategoryDetail";

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
                        <Route exact path="/category/detail/:id" component={CategoryDetail}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default createContainer((object) => {
    return {};

}, App);