'use strict'

var React = require('react');
var ReactDom = require('react-dom');
var StartScreen = require('./StartScreen.js');

window.React = React;

ReactDom.render(<StartScreen name='Justin' passage='Welcome to my Site'/>, document.getElementById('content'));
//ReactDom.render(<Jumbotron/>, document.getElementById('content'));