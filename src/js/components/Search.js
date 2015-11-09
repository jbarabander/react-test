var React = require('react');
import {Link} from 'react-router';
var SearchActions = require('../actions/SearchActions.js');
var SearchStore = require('../stores/SearchStore.js');


module.exports = React.createClass({
    componentDidMount() {
        SearchStore.addChangeListener(this._onChange);
        SearchActions.search(this.props.location.query);
    },
    _onChange() {
        console.log('on change');
        console.log(SearchStore.getUsers());
        this.setState({users: SearchStore.getUsers(), locations: SearchStore.getLocations()});
    },
    componentWillUnmount() {
        SearchStore.removeChangeListener(this._onChange);
    },
    getInitialState() {
        return {
            users: SearchStore.getUsers(),
            locations: SearchStore.getLocations()
        }
    },
    render() {
        console.log(this.state.users);
        return (
            <div className='container'>
                <div className='container'>
                    <h3>Users</h3>
                    <div>
                        {this.state.users ? this.state.users.map(function(element, index) {
                            return (<div key={index}>
                                <h4>{element.username}</h4>
                                <p>{element.email}</p>
                            </div>)
                        }) : null}
                    </div>
                    <h3>Locations</h3>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
});