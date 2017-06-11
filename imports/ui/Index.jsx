import React, { Component, PropTypes } from 'react';

import Layout from 'react-toolbox/lib/layout/Layout';

import history from '../api/history';

import { Route, Redirect } from 'react-router'

export default class Index extends Component {
    render() {
        return(
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                <h1>Tohle je hlavní stránka</h1>
            </div>
        )
    }
}