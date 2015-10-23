var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <div className='navbar navbar-inverse'>
                    <div className='navbar-right'>
                        <ul className='nav navbar-nav'>
                            <li><a href="#">hello</a></li>
                            <li><a href="#">boo</a></li>
                            <li><a href="#">blah</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});
