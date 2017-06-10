import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = { open: false };
    }

    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div>
                <AppBar leftIcon='menu'>
                    <Navigation type='horizontal'>
                        <Link href='http://' label='Inbox' icon='inbox' />
                        <Link href='http://' active label='Profile' icon='person' />
                    </Navigation>
                </AppBar>
            </div>
        )
    }
}

export default createContainer(() => {
    return {
    };
}, Menu);