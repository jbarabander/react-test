var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <div className='container'>
                <h2>Leave us Feedback</h2>
                <div className='contact-form'>
                    <form className='form-group'>
                        <div className='col-sm-6 col-xs-12'>
                            <label>First name</label>
                            <input type="text" className='form-control'/>
                        </div>
                        <div className='col-sm-6 col-xs-12'>
                            <label>Last name</label>
                            <input type="text" className='form-control'/>
                        </div>
                        <div className='col-xs-12'>
                            <label>Email</label>
                            <input type="email" className='form-control'/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
})