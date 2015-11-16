var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var userConstants = require('../constants/userConstants.js');
var authConstants = require('../constants/authConstants.js'); //FIXME
var RouterContainer = require('../containers/RouterContainer.js');
var LoadingActions = require('./LoadingActions.js');
var request = require('superagent');

function create(content) {
    delete content.repeatedPassword;
    request.post('api/users')
    .send(content)
    .end(function(err, res) {
            if(err) throw new Error(err.message);
            AppDispatcher.handleViewAction({
                actionType: userConstants.USER_CREATE,
                content: JSON.parse(res.text)
            });
            AppDispatcher.handleViewAction({
                actionType: authConstants.LOGIN_SUCCESS,
                content: JSON.parse(res.text)
            });
            RouterContainer.get().history.pushState(null, '/');
        });
}

function destroy(id) {
    AppDispatcher.handleViewAction({
        actionType: userConstants.USER_DESTROY,
        id: id
    })
}

function update(id, content) {
    AppDispatcher.handleViewAction({
        actionType: userConstants.USER_UPDATE,
        id: id,
        content: content
    })
}

module.exports = {
    create: create,
    destroy: destroy,
    update: update
}
