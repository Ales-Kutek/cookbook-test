import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Menu from './Menu'
import Index from './Index'
import CategoryList from './Category/CategoryList'

import theme from '../api/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

const browserHistory = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <div>
                        <Menu/>
                        <Route exact path="/" component={Index}/>
                        <Route path="/category" component={CategoryList}/>
                        {/*<Route path="signin" component={AuthPageSignIn}/>*/}
                        {/*<Route path="join" component={AuthPageJoin}/>*/}
                        {/*<Route path="*" component={NotFoundPage}/>*/}
                    </div>
                </Router>
            </div>
        )
    }
}

export default createContainer((object) => {
    return {

    };

}, App);