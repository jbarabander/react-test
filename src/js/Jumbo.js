React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            foo: 'bar',
            zeta: 'chi'
        }
    },
    render: function() {
        return (
            <div className='jumbotron'>
                <h1>Test Jumbotron</h1>
                <h3>{this.props.passage}</h3>
                <button className='btn btn-info view'>View My Profile</button> <button className='btn btn-danger about'>About</button>
            </div>
        )
    },
});