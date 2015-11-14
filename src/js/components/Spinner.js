var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <div className='loading-spinner'>
                <div className='double-bounce1'></div>
                <div className='double-bounce2'></div>
            </div>
        )
    }
})