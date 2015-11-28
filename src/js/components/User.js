var React = require('react');
var UserActions = require('../actions/UserActions');
module.exports = React.createClass({
    componentDidMount() {
        UserActions.getUser(this.props.params.id);
    },
    render() {
        return (
            <div className='container'>
                {/*<div>header</div>
                <div className='or-with-line'>
                    <h6>Recent Places</h6>
                </div>
                <div>body</div>*/}
            </div>
        )
    }
});