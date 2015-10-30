var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className='oauth-group'>
                <h3 className='oauth-title'>Or login through</h3>
                <div className='icon-container'>
                    <div className='col-md-6 col-sm-3 col-xs-6'><a href='#' className='icon-link'><i className="fa fa-github fa-l"></i></a></div>
                    <div className='col-md-6 col-sm-3 col-xs-6'><a href='#' className='icon-link'><i className="fa fa-google-plus fa-l"></i></a></div>
                    <div className='col-md-6 col-sm-3 col-xs-6'><a href='#' className='icon-link'><i className="fa fa-facebook fa-l"></i></a></div>
                    <div className='col-md-6 col-sm-3 col-xs-6'><a href='#' className='icon-link'><i className="fa fa-twitter fa-l"></i></a></div>
                </div>
            </div>
        )
    }
})