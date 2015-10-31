var React = require('react');

//<div><button className='btn btn-info'><i className='fa fa-facebook button-icon'></i>Login with Facebook</button></div>
//<div><button className='btn btn-info'>boo</button></div>
//<div><button className='btn btn-info'>me</button></div>

module.exports = React.createClass({
    render: function() {
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
                        <div>
                            <form className="form form-group">
                                <label>Email or Username</label>
                                <input type="text" className='form-control'/>
                                <label>Password</label>
                                <input type="password" className='form-control'/>
                                <button className='btn btn-info view submit-btn'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
});