React = require('react');

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
                    <button className='btn btn-info view' onClick={this.handleClick}>View My Profile</button> <button className='btn btn-danger about'>About</button>
                </div>
                <button className={this.state.show ? 'hidden': 'btn btn-info view'} onClick={this.handleClick}>Hide Profile</button>
            </div>
        )
    }
});