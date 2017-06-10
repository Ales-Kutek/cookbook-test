import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import CategoryList from './CategoryList';

class App extends Component {
    render() {
        return (
            <div>
                <CategoryList/>
            </div>
        )
    }
}

export default createContainer(() => {
    return {
    };
}, App);