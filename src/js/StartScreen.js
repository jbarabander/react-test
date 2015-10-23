var React = require('react');
var Navbar = require('./Navbar.js');
var Jumbo = require('./Jumbo.js');

module.exports = React.createClass({
    render: function() {
        return (
            <div className='text-center'>
                <Navbar name={this.props.name}/>
                <Jumbo passage={this.props.passage}/>
            </div>
        )
    }
});

