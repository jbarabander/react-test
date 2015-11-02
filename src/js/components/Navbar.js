var React = require('react');
//var data = [{name: 'hello', key: keyGen(8)}, {name: 'boo', key: keyGen(8)}, {name: 'blah', key: keyGen(8)}];
var Link = require('react-router').Link;
var AuthActions = require('../actions/AuthActions.js');
//{data.map((element, index) => {
//    return <li key={index}><a href="#">{element}</a></li>
//})}

//<button className='btn login-btn big-button'>Log in</button>

module.exports = React.createClass({
    _onLogout: function() {
        AuthActions.logout();
    },
    render: function () {
        return (
            <div>
                <div className='navbar navbar-inverse' id='inter-navbar'>
                    <div className='container-fluid'>
                        <Link to='/' className='navbar-brand'>Welcome {this.props.user.firstName}</Link>
                        <div className='navbar-right'>
                            <ul className='nav navbar-nav'>
                                <li className={this.props.user ? '': 'hidden'}><a href='#' onClick={this._onLogout}>Logout</a></li>
                                <li className={this.props.user ? 'hidden': ''}><Link to='/login' activeClassName='active'>Log In</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
