import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Button from 'react-toolbox/lib/button/Button';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
import Link from 'react-toolbox/lib/link/Link';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

import { NavLink } from 'react-router-dom';

import { Route, Redirect } from 'react-router'

import history from '../api/history';

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
            <AppBar title="Kuchařka" leftIcon="menu" onLeftIconClick={this.handleToggle}>
                <Navigation type="horizontal"/>
            </AppBar>

            <div>
                <Drawer active={this.state.open} onOverlayClick={this.handleToggle}>
                    <List selectable ripple>

                        <NavLink to="/category">Category</NavLink>

                        <ListItem
                            leftIcon="home"
                            onClick={() => {
                                history.push('/');
                                this.handleToggle()
                            }}
                        >
                            <NavLink exact to="/">Domů</NavLink>
                        </ListItem>
                        <ListItem
                            leftIcon="folder"
                            onClick={() => {
                                history.push('category');
                                this.handleToggle()
                            }}
                        ><NavLink exact to="/">Kategorie</NavLink></ListItem>
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