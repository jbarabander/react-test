var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className='oauth-group text-center'>
                <h3>Or...do this thing</h3>
                <div className='icon-container'>
                    <div className='col-sm-6 col-xs-12'><a href='#'><i className="fa fa-github fa-l"></i></a></div>
                    <div className='col-sm-6 col-xs-12'><a href='#'><i className="fa fa-google-plus fa-l"></i></a></div>
                    <div className='col-sm-6 col-xs-12'><a href='#'><i className="fa fa-facebook fa-l"></i></a></div>
                    <div className='col-sm-6 col-xs-12'><a href='#'><i className="fa fa-twitter fa-l"></i></a></div>
                </div>
            </div>
        )
    }
})