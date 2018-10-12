import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';

import Auth from './components/Auth/Auth.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Form from './components/Form/Form.js';
import Post from './components/Post/Post.js';

export default(
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/post/:postid' component={Post} />
        <Route path='/new' component={Form} />
    </Switch>
)