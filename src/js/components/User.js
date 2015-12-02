var React = require('react');
var UserActions = require('../actions/UserActions');
var UserStore = require('../stores/UserStore');
module.exports = React.createClass({
    getInitialState() {
        return {
            user: null
        }
    },
    componentDidMount() {
        UserActions.getUser(this.props.params.id);
        UserStore.addChangeListener(this._onGetUser);
    },
    componentWillUnmount() {
        UserStore.removeChangeListener(this._onGetUser);
    },
    render() {
        console.log(this.state.user);
        return (
            <div className='container'>
                <h3>{this.state.user ? this.state.user.username : null }</h3>
                {/*<div>header</div>
                <div className='or-with-line'>
                    <h6>Recent Places</h6>
                </div>
                <div>body</div>*/}
            </div>
        )
    },
    _onGetUser() {
        this.setState({user: UserStore.getUser()});
    }
});