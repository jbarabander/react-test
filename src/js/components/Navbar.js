var React = require('react');
//var data = [{name: 'hello', key: keyGen(8)}, {name: 'boo', key: keyGen(8)}, {name: 'blah', key: keyGen(8)}];
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var AuthActions = require('../actions/AuthActions.js');
var SearchActions = require('../actions/SearchActions.js');
var History = require('react-router').History;
var RouteContext = require('react-router').RouteContext;
//{data.map((element, index) => {
//    return <li key={index}><a href="#">{element}</a></li>
//})}

//<button className='btn login-btn big-button'>Log in</button>

module.exports = React.createClass({
    mixins: [History],
    _onLogout: function () {
        AuthActions.logout();
    },
    getInitialState() {
        return {
            q: ''
        }
    },
    isLinkActive(path, query) {
        return this.history.isActive(path, query, true);
    },
    _onChange: function (event) {
        var obj = {};
        obj.q = event.target.value;
        this.setState(obj);
    },
    _onKeyPress: function (event) {
        if (event.which === 13) {
            if (this.history.isActive('/search')) {
                SearchActions.search(this.state);
            }
            this.history.pushState(null, '/search', this.state);
        }
    },
    _onSearch: function () {
        if(this.history.isActive('/search')) {
            SearchActions.search(this.state);
        }
        this.history.pushState(null, '/search', this.state);
        //SearchActions.search(this.state);
    },
    render: function () {
        var searchValue = this.state.q;
        return (
            <div>
                <div className='navbar navbar-inverse' id='inter-navbar'>
                    <div className='container-fluid'>
                        <Link to='/' className='navbar-brand'>Welcome {this.props.user.firstName}</Link>

                        <div className='navbar-right'>
                            <ul className='nav navbar-nav'>
                                <li>
                                    <div className='search-container'>
                                        <label htmlFor="search-bar" className='search-label'>
                                            <a onClick={this._onSearch}>
                                                <i className=' fa fa-search'></i>
                                            </a>
                                        </label>
                                        <input id='search-bar' type="text" className='form-control' value={searchValue}
                                               onChange={this._onChange} onKeyPress={this._onKeyPress}/>
                                    </div>
                                </li>
                                <li><IndexLink to='/' id='home-link' activeClassName='home-active'>Home</IndexLink></li>
                                {/*
                                 <li><Link to='/search' id='search-link'>Search</Link></li>
                                 */}
                                <li className={this.props.user ? '': 'hidden'}><a href='#' id='logout-link'
                                                                                  onClick={this._onLogout}>Logout</a>
                                </li>
                                <li className={this.props.user ? 'hidden': ''}><Link to='/signup'
                                                                                     activeClassName='signup-active'
                                                                                     id='signup-link'>Sign Up</Link>
                                </li>
                                <li className={this.props.user ? 'hidden': ''}><Link to='/login'
                                                                                     activeClassName='login-active'
                                                                                     id='login-link'>Log In</Link></li>
                                <li><Link to='/contact' activeClassName='contact-active'
                                          id='contact-link'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
