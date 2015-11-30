var React = require('react');
React.cloneWithProps = require('react-addons-clone-with-props');
var StartScreen = require('./StartScreen.js');
var UserStore = require('../stores/UserStore.js');
var AuthStore = require('../stores/AuthStore.js');
var SignUp = require('./SignUp.js');
var Navbar = require('./Navbar.js');
var User = require('./User.js'); //FIXME
var AuthActions = require('../actions/AuthActions.js');
var SpinnerStore = require('../stores/SpinnerStore.js');
var Spinner = require('./Spinner.js');
var propRouter = require('../propRouter');

function getUserState() {
    return {
        allUsers: UserStore.getAll(),
        currentUser: UserStore.getUser()
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
            currentUser: getUserState().currentUser,
            showSpinner: false
        }
    },
    componentDidMount: function () {
        //UserStore.addChangeListener(this._onChange);
        AuthStore.addChangeListener(this._onChange);
        SpinnerStore.addChangeListener(this._onSearch);
        UserStore.addChangeListener(this._onGetUser);
        AuthActions.getSession();
    },
    componentWillUnmount: function () {
        //UserStore.removeChangeListener(this._onChange)
        AuthStore.removeChangeListener(this._onChange);
        UserStore.removeChangeListener(this._onGetUser);
        SpinnerStore.removeChangeListener(this._onSearch);
    },
    renderChildren: function() {
        var self = this;
        return React.Children.map(this.props.children, function (element) {
            console.log(element);
            return propRouter(element, self.state);
        })
    },
    render: function () {
        return (
            <div>
                <Navbar user={isLoggedIn() ? this.state.loggedInUser : ''}
                        showSpinner={this.state.showSpinner}></Navbar>
                {/*this.props.children*/}
                {this.renderChildren()}
            </div>
        )
    },
    _onChange: function () {
        //this.setState(getUserState());
        this.setState(getLogin());
    },
    _onSearch: function () {
        this.setState(getSpinnerStatus());
    },
    _onGetUser: function () {
        this.setState(getUserState());
    }
});

module.exports = App;