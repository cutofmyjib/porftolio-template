import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import history from './history';
import App from './App';
import Home from './home';
import About from './about';

export default (
  <Router history={history}>
    <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
    </Route>
  </Router>
);
