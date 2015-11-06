import * as React from 'react';
import {Link} from 'react-router';
import * as SearchActions from '../actions/SearchActions.js';
import * as SearchStore from '../stores/SearchStore.js';


module.exports = React.createClass({
    componentDidMount() {
        SearchActions.search(this.props.location.query);
    },
    componentWillUnmount() {

    },
    getInitialState() {
    },
    render() {
        return (
            <div className='container'>
                <div className='container'>
                    <h3>Users</h3>
                    <div>
                    </div>
                    <h3>Locations</h3>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
});