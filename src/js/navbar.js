var React = require('react');
var keyGen = require('./utilities').keyGen;
//var data = [{name: 'hello', key: keyGen(8)}, {name: 'boo', key: keyGen(8)}, {name: 'blah', key: keyGen(8)}];
var data = ['hello', 'boo', 'blah']

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <div className='navbar navbar-inverse'>
                    <div className='container-fluid'>
                        <a className='navbar-brand' href="#">Welcome {this.props.name}</a>
                        <div className='navbar-right'>
                            <ul className='nav navbar-nav'>
                                {data.map((element, index) => {
                                    return <li key={index}><a href="#">{element}</a></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
