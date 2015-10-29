var React = require('react');
var UserActions = require('../actions/UserActions.js');


module.exports = React.createClass({
    getInitialState: function() {
        return {
            email: {name:'email', type: 'email', value: ''},
            password: {name:'password', type: 'password', value: ''},
            repeatedPassword: {name:'repeated password', type: 'password', value: ''},
            username: {name:'username', type: 'text', value: 'username'}
        };
    },
    handleChange: function(type, element, event) {
        var state = {};
        state[type] = element;
        state[type].value = event.target.value;
        this.setState(state);
    },
    render: function() {
        var values = this.state;
        var self = this;
        return (
            <div className='form form-group'>
                {Object.keys(values).map(function(element, index) {
                    return (
                        <div key={index}>
                            <label>{values[element].name}</label>
                            <input className='form from-control' type={values[element].type} value={values[element].value}
                                   onChange={self.handleChange.bind(self, element, values[element])}/>
                        </div>
                    )
                })}
                <button className='btn btn-info view' onClick={this.submitUser}>Submit</button>
            </div>
        )
    },
    submitUser: function() {
        if(this.state.password.value === this.state.repeatedPassword.value) {
            console.log('hi');
            UserActions.create(this.state);
        }
    }
});