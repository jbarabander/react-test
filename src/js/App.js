'use strict'

var React = require('react');
var ReactDom = require('react-dom');
var App = require('./components/Main.js');
var StartScreen = require('./components/StartScreen.js');
var IndexRoute = require('react-router').IndexRoute;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var SignUp = require('./components/SignUp.js');
var Login = require('./components/Login.js');
var Contact = require('./components/Contact.js');
var attachFastClick = require('fastclick');
attachFastClick(document.body);
var createBrowserHistory = require('history/lib/createBrowserHistory');
window.React = React;
var RouterContainer = require('./containers/RouterContainer.js');


var routes = (
    <Route path='/' component={App}>
        <IndexRoute component={StartScreen}/>
        <Route path='signup' component={SignUp}/>
    </Route>
);

var AppRouter = ReactDom.render((
    <Router history={createBrowserHistory()}>
        <Route path='/' component={App}>
            <IndexRoute name='home' component={StartScreen}/>
            <Route name='signup' path='signup' component={SignUp}/>
            <Route name='login' path='login' component={Login}/>
            <Route name='contact' path='contact' component={Contact}/>
        </Route>
    </Router>
    ), document.getElementById('content'));

RouterContainer.set(AppRouter);