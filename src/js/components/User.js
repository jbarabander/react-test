var React = require('react');
var UserActions = require('../actions/UserActions');
module.exports = React.createClass({
    componentDidMount() {
        UserActions.getUser(this.props.params.id);
    },
    render() {
        console.log(this.props.foundUser);
        return (
            <div className='container'>
                <h3>{this.props.foundUser ? this.props.foundUser.username : null }</h3>
                {/*<div>header</div>
                <div className='or-with-line'>
                    <h6>Recent Places</h6>
                </div>
                <div>body</div>*/}
            </div>
        )
    }
});