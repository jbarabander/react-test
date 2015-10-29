var React = require('react');
var UserActions = require('../actions/UserActions.js');
var formElements = [
    {stateName: 'firstName', name: 'first name', type: 'text', formClass: 'half-form-el'},
    {stateName: 'lastName', name: 'last name', type: 'text', formClass: 'half-form-el'},
    {stateName: 'email', name:'email', type: 'email', formClass: 'full-form-el'},
    {stateName: 'password', name:'password', type: 'password', formClass: 'half-form-el'},
    {stateName: 'repeatedPassword', name: 'repeated password', type: 'password', formClass: 'half-form-el'},
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
    render: function() {
        //<h1>--Or use one of these-- </h1>
        var values = this.state;
        var self = this;
        return (
            <div className='container'>
                <h1>Create an account</h1>
                <div className='signup-container'>
                    <div className='flex-container'>
                        <div className='local-signup-group'>
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
                                <button className='btn btn-info view submit-btn' onClick={this.submitUser}>Submit</button>
                            </form>
                        </div>
                        <div className='oauth-group text-center'>
                            <div className='icon-container'>
                                <div className='col-sm-6 col-xs-12'><a href='#'><i className="fa fa-github fa-l"></i></a></div>
                                <div className='col-sm-6 col-xs-12'><a href='#'><i className="fa fa-google-plus fa-l"></i></a></div>
                                <div className='col-sm-6 col-xs-12'><a href='#'><i className="fa fa-facebook fa-l"></i></a></div>
                                <div className='col-sm-6 col-xs-12'><a href='#'><i className="fa fa-twitter fa-l"></i></a></div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        )
    },
    submitUser: function() {
        if(this.state.password === this.state.repeatedPassword) {
            console.log('hi');
            UserActions.create(this.state);
        }
    }
});