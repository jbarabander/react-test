'use strict'

var React = require('react');
var ReactDom = require('react-dom');
var App = require('./components/Main.js');
var StartScreen = require('./components/StartScreen.js');
var IndexRoute = require('react-router').IndexRoute;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var SignUp = require('./components/SignUp.js');
//var Link = require('react-router').Link;
var attachFastClick = require('fastclick');
attachFastClick(document.body);
var createBrowserHistory = require('history/lib/createBrowserHistory');
window.React = React;
var RouterContainer = require('./containers/RouterContainer.js');

RouterContainer.set(Router);

ReactDom.render((
    <Router history={createBrowserHistory()}>
        <Route path='/' component={App}>
            <IndexRoute component={StartScreen}/>
            <Route path='signup' component={SignUp}/>
        </Route>
    </Router>
    ), document.getElementById('content'));
//ReactDom.render(<Jumbotron/>, document.getElementById('content'));