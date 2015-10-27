'use strict'

var React = require('react');
var ReactDom = require('react-dom');
var StartScreen = require('./components/StartScreen.js');
require('./dispatchers');
var attachFastClick = require('fastclick');
attachFastClick(document.body);
window.React = React;



ReactDom.render(<StartScreen name={{first: 'Justin', last: 'Barabander'}} passage='Welcome to my Site'/>, document.getElementById('content'));
//ReactDom.render(<Jumbotron/>, document.getElementById('content'));