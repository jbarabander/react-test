'use strict'

var React = require('react');
var ReactDom = require('react-dom');
var Main = require('./components/Main.js');
var attachFastClick = require('fastclick');
attachFastClick(document.body);
window.React = React;



ReactDom.render(<Main/>, document.getElementById('content'));
//ReactDom.render(<Jumbotron/>, document.getElementById('content'));