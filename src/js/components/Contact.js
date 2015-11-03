var React = require('react');

module.exports = React.createClass({
    render() {
        return (
            <div className='container'>
                <h2>Leave us Feedback</h2>
                <form className='form-group'>
                    <div className='form-inline'>
                        <label>First name</label>
                        <input type="text" className='form-control'/>
                        <label>Last name</label>
                        <input type="text" className='form-control'/>
                    </div>
                </form>
            </div>
        )
    }
})