import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router';

import Menu from './Menu'
import CategoryList from './CategoryList';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={CategoryList}/>
                        <Route path="/detail" component={CategoryList}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default createContainer(() => {
    return {
    };
}, App);