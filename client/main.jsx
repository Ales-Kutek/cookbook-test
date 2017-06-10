import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
    render(
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>

        ,document.getElementById('render-target'));
});