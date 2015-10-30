var React = require('react');
var UserActions = require('../actions/UserActions.js');

var formElements = [
    {stateName: 'firstName', name: 'first name', type: 'text', formClass: 'half-form-el'},
    {stateName: 'lastName', name: 'last name', type: 'text', formClass: 'half-form-el'},
    {stateName: 'email', name:'email', type: 'email', formClass: 'full-form-el'},
    {stateName: 'password', name:'password', type: 'password', formClass: 'half-form-el'},
    {stateName: 'repeatedPassword', name: 'repeat password', type: 'password', formClass: 'half-form-el'},
    {stateName: 'username', name: 'username', type: 'text', formClass: 'full-form-el'}
];

module.exports = React.createClass({
    getInitialState: function() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            repeatedPassword: '',
            username: ''
        };
    },
    handleChange: function(type, event) {
        var state = {};
        state[type] = event.target.value;
        this.setState(state);
    },
    submitUser: function() {
        if(this.state.password === this.state.repeatedPassword && this.state.password !== '') {
            console.log('hi');
            UserActions.create(this.state);
        }
    },
    render: function() {
        var values = this.state;
        var self = this;
        return (
            <div className='local-signup-group'>
                <h3>Create an Account</h3>
                <form className='form-group'>
                    {formElements.map(function(element, index) {
                        return (
                            <div key={index} className={element.formClass}>
                                <label>{element.name}</label>
                                <input className='form-control' type={element.type} value={values[element.stateName]}
                                       onChange={self.handleChange.bind(self, element.stateName)}/>
                            </div>
                        )
                    })}
                    <button type='button' className='btn btn-info view submit-btn' onClick={this.submitUser}>Submit</button>
                </form>
            </div>
        )
    }
});