var React = require('react');
React.cloneWithProps = require('react-addons-clone-with-props');
var StartScreen = require('./StartScreen.js');
var UserStore = require('../stores/UserStore.js');
var AuthStore = require('../stores/AuthStore.js');
var SignUp = require('./SignUp.js');
var Navbar = require('./Navbar.js');
var AuthActions = require('../actions/AuthActions.js');
var SpinnerStore = require('../stores/SpinnerStore.js');
var Spinner = require('./Spinner.js');

function getUserState() {
    return {
        allUsers: UserStore.getAll()
    };
}

function getLogin() {
    return {
        loggedInUser: AuthStore.getLoggedInUser()
    }
}

function isLoggedIn() {
    return AuthStore.isLoggedIn();
}

function getSpinnerStatus() {
    return {
        showSpinner: SpinnerStore.getSpinnerStatus()
    }
}

//<StartScreen name={this.state.name} passage={this.state.passage}/>
var App = React.createClass({
    getInitialState: function () {
        return {
            loggedInUser: null,
            passage: 'Meet me in the middle!',
            allUsers: getUserState().allUsers,
            showSpinner: false
        }
    },
    componentDidMount: function () {
        //UserStore.addChangeListener(this._onChange);
        AuthStore.addChangeListener(this._onChange);
        SpinnerStore.addChangeListener(this._onSearch);
        AuthActions.getSession();
    },
    componentWillUnmount: function () {
        //UserStore.removeChangeListener(this._onChange)
        AuthStore.removeChangeListener(this._onChange);
    },
    render: function () {
        return (
            <div>
                <Navbar user={isLoggedIn() ? this.state.loggedInUser : ''}
                        showSpinner={this.state.showSpinner}></Navbar>
                {this.props.children}
            </div>
        )
    },
    _onChange: function () {
        //this.setState(getUserState());
        this.setState(getLogin());
    },
    _onSearch: function () {
        this.setState(getSpinnerStatus());
    }
});

module.exports = App;