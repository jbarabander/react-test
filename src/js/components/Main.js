var React = require('react');
var StartScreen = require('./StartScreen.js');
var UserStore = require('../stores/UserStore.js');
var SignUp = require('./SignUp.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

function getUserState() {
    return {
        allUsers: UserStore.getAll()
    };
}

var App = React.createClass({
    getInitialState: function() {
        //return {
        //    name: {first: 'Justin', last: 'Barabander'},
        //    passage: 'Welcome to my Site'
        //}

        return {
            name: {first: 'Justin', last: 'Barabander'},
            passage: 'Meet me in the middle!',
            allUsers: getUserState().allUsers
        }
    },
    componentDidMount: function() {
        UserStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        UserStore.removeChangeListener(this._onChange)
    },
    render: function() {
        return (
            <div>
                <StartScreen name={this.state.name} passage={this.state.passage}/>
            </div>
        )
    },
    _onChange: function() {
        console.log(getUserState());
        this.setState(getUserState());
    }
});

module.exports = App;