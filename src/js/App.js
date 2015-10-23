React = require('react');
ReactDom = require('react-dom');
var Navbar = require('./navbar.js');

window.React = React;

ReactDom.render(<Navbar/>, document.getElementById('content'));