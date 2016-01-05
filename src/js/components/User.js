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
        //console.log(this.state.user);
        return (
            <div>
                <div className={this.state.user ? null : 'hidden'}>
                    <div className='profile-header text-center'>
                        <div className='profile-title'>
                            <img src={this._getUserProp('photoUrl')} className='profile-thumbnail'/>
                            <p>{this._getUserProp('firstName')} {this._getUserProp('lastName')}</p>
                            <p>{this._getUserProp('email')}</p>
                        </div>
                        {/*<h2 className='text-center'>{this._getUserProp('username')}</h2>*/}
                    </div>
                    <div className='profile-body'>
                        <div className='text-center'>
                        </div>
                    </div>
                </div>

                {/*<h3>{this.props.foundUser ? this.props.foundUser.username : null }</h3>*/}

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
    },
    _getUserProp(propName) {
        if(this.state.user) {
            return this.state.user[propName];
        }
        return null;
    },
});