var React = require('react');
var StartScreen = require('./StartScreen.js');
var UserStore = require('../stores/UserStore.js');
var AuthStore = require('../stores/AuthStore.js');
var SignUp = require('./SignUp.js');
var Navbar = require('./Navbar.js');

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

//<StartScreen name={this.state.name} passage={this.state.passage}/>
var App = React.createClass({
    getInitialState: function() {
        //return {
        //    name: {first: 'Justin', last: 'Barabander'},
        //    passage: 'Welcome to my Site'
        //}

        return {
            loggedInUser: null,
            passage: 'Meet me in the middle!',
            allUsers: getUserState().allUsers
        }
    },
    componentDidMount: function() {
        //UserStore.addChangeListener(this._onChange);
        AuthStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        //UserStore.removeChangeListener(this._onChange)
        AuthStore.removeChangeListener(this._onChange);
    },
    render: function() {
        return (
            <div>
                <Navbar name={this.state.loggedInUser ? this.state.loggedInUser.firstName : ''}></Navbar>
                {this.props.children}
            </div>
        )
    },
    _onChange: function() {
        //this.setState(getUserState());
        this.setState(getLogin());
    }
});

module.exports = App;