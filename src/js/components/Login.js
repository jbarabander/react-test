var React = require('react');
var AuthActions = require('../actions/AuthActions.js');

//<div><button className='btn btn-info'><i className='fa fa-facebook button-icon'></i>Login with Facebook</button></div>
//<div><button className='btn btn-info'>boo</button></div>
//<div><button className='btn btn-info'>me</button></div>

module.exports = React.createClass({
    getInitialState: function() {
        return {
            usernameOrEmail: '',
            password: ''
        }
    },
    _onChange: function(type, event) {
        var obj = {};
        obj[type] = event.target.value;
        this.setState(obj);
    },
    render: function() {
        var values = this.state;
        var self = this;
        return (
            <div className='container'>
                <div className='login-container'>
                    <div className='local-login'>
                        <div className='oauth-buttons row'>
                            <h4>Login through:</h4>
                            <div className='col-sm-3 col-xs-6'><a href='#' className='icon-link'><i className='fa fa-facebook auth-icon'></i></a></div>
                            <div className='col-sm-3 col-xs-6'><a href='#' className='icon-link'><i className='fa fa-twitter auth-icon'></i></a></div>
                            <div className='col-sm-3 col-xs-6'><a href='#' className='icon-link'><i className='fa fa-google-plus auth-icon'></i></a></div>
                            <div className='col-sm-3 col-xs-6'><a href='#' className='icon-link'><i className='fa fa-github auth-icon'></i></a></div>
                        </div>
                        <div className='or-with-line'>
                            <span>or</span>
                        </div>
                        <div>
                            <form className="form form-group" onSubmit={this.handleSubmit}>
                                <label>Email or Username</label>
                                <input type="text" className='form-control' value={values.usernameOrEmail} onChange = {self._onChange.bind(self, 'usernameOrEmail')}/>
                                <label>Password</label>
                                <input type="password" className='form-control' value={values.password} onChange = {self._onChange.bind(self, 'password')}/>
                                <button className='btn btn-info view submit-btn'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    handleSubmit: function(event) {
        event.preventDefault();
        AuthActions.login(this.state);
    }
});