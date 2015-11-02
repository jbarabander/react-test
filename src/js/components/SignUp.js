var React = require('react');
var OAuth = require('./Oauth.js');
var LocalSignUp = require('./LocalSignUp');


module.exports = React.createClass({
    render: function() {
        return (
            <div className='container'>
                <h1>Sign Up</h1>
                <div className='signup-container'>
                    <div className='flex-container'>
                        <LocalSignUp/>
                        <OAuth/>
                    </div>
                </div>
            </div>
        )
    }
});