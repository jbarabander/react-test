var React = require('react');
var Link = require('react-router').Link;
module.exports = React.createClass({
    //getInitialState: function() {
    //    return {
    //        show: true
    //    }
    //},
    componentDidMount: function() {
        console.log('hi');
    },
    render: function() {
        return (
            <div>
                <div className='jumbotron front'>
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.passage}</h3>
                    <Link to='/signup'><button className='btn btn-info view big-button'>Sign Up</button></Link> <button className='btn btn-danger about big-button'>About</button>
                </div>
            </div>
        )
    }
});