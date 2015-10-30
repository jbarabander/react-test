var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var userConstants = require('../constants/userConstants.js');
var request = require('superagent');
var Router = require('react-router');

function create(content, cb) {
    delete content.repeatedPassword;
    request.post('api/users')
    .send(content)
    .end(function(err, res) {
            AppDispatcher.handleViewAction({
                actionType: userConstants.USER_CREATE,
                content: res
            });
            cb();
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
