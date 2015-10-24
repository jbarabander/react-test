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
            </div>
        )
    },
});