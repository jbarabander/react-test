var React = require('react');
var StartScreen = require('./StartScreen.js');
var UserStore = require('../stores/UserStore.js');
var SignUp = require('./SignUp.js');
var Navbar = require('./Navbar.js');

function getUserState() {
    return {
        allUsers: UserStore.getAll()
    };
}

//<StartScreen name={this.state.name} passage={this.state.passage}/>
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
                <Navbar name={this.state.name.first}></Navbar>
                {this.props.children}
            </div>
        )
    },
    _onChange: function() {
        this.setState(getUserState());
    }
});

module.exports = App;