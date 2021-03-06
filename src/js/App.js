'use strict';

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
var Search = require('./components/Search.js');
var User = require('./components/User.js');
var attachFastClick = require('fastclick');
attachFastClick(document.body);
var createBrowserHistory = require('history/lib/createBrowserHistory');
window.React = React;
var RouterContainer = require('./containers/RouterContainer.js');


var AppRouter = ReactDom.render((
    <Router history={createBrowserHistory()}>
        <Route path='/' component={App}>
            <IndexRoute component={StartScreen}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/login' component={Login}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/search' component={Search}/>
            <Route path='/users/:id' component={User}/>
        </Route>
    </Router>
), document.getElementById('content'));

RouterContainer.set(AppRouter);