import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Button from 'react-toolbox/lib/button/Button';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
// import Link from 'react-toolbox/lib/link/Link';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

import { Link } from 'react-router-dom';

import { Route, Redirect } from 'react-router'

import history from '../api/history';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            open: false,
            redirect: ""
        };
    }

    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    redirectTo(to) {
        this.setState({redirect: to});
    }

    render() {
        return (

        <div>
            <AppBar title="Kuchařka" leftIcon="menu" onLeftIconClick={this.handleToggle}>
                <Navigation type="horizontal"/>
            </AppBar>

            {this.state.redirect !== "" ? <Redirect to={this.state.redirect}/> : ""}
            {this.state.redirect = ""}

            <div>
                <Drawer active={this.state.open} onOverlayClick={this.handleToggle}>
                    <List selectable ripple>
                        <ListItem caption="Domů" leftIcon="home" onClick={() => {this.handleToggle();this.redirectTo("/")}}/>
                        <ListItem caption="Kategorie" leftIcon="folder" onClick={() => {this.handleToggle();this.redirectTo("/category")}}/>

                        <ListItem
                            caption='Recepty'
                            leftIcon="note"
                        />
                        <ListItem
                            caption='Něco dalšího'
                            leftIcon="settings"
                        />
                    </List>
                </Drawer>
            </div>
        </div>
        )
    }
}

export default createContainer((object) => {
    return {
    };
}, Menu);