import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import Home from './pages/errorPage';
import Home from './pages/Home';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='*' component={ErrorPage}/>
                <Route path='/Home' component={Home}/>
            </Switch>
        </BrowserRouter>
    )
};