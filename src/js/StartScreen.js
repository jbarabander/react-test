var React = require('react');
var Navbar = require('./Navbar.js');
var Jumbo = require('./Jumbo.js');
var _ = require('lodash');

module.exports = React.createClass({
    render: function() {
        return (
            <div className='text-center'>
                <Navbar {...this.props}/>
                <Jumbo {...this.props}/>
            </div>
        )
    }
});

