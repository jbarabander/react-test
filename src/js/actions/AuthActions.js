var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var request = require('superagent');
var authConstants = require('../constants/authConstants.js');
var RouterContainer = require('../containers/RouterContainer.js');

function login(content) {
    request.post('/login')
    .send(content)
    .end(function(err, res) {
            if(err) throw new Error(err.message);
            AppDispatcher.handleViewAction({
                actionType: authConstants.LOGIN_SUCCESS,
                content: JSON.parse(res.text)
            });
            RouterContainer.get().history.pushState(null, '/');
        })
}

module.exports = {
    login: login
}