React = require('react');
var Link = require('react-router').Link;
module.exports = React.createClass({
    getInitialState: function() {
        return {
            show: true,
        }
    },
    handleClick: function() {
        if(this.state.show) {
            this.setState({show: false});
        } else {
            this.setState({show: true});
        }

    },
    render: function() {
        var revealedClass = 'jumbotron ' + this.props.addedClass;
        console.log(revealedClass);
        return (
            <div>
                <div className={this.state.show ? revealedClass:'hidden'}>
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.passage}</h3>
                    <Link to='/signup'><button className='btn btn-info view big-button' onClick={this.handleClick}>Sign Up</button></Link> <button className='btn btn-danger about big-button'>About</button>
                </div>
                <button className={this.state.show ? 'hidden': 'btn btn-info view big-button'} onClick={this.handleClick}>Hide Profile</button>
            </div>
        )
    }
});