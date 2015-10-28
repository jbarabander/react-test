var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var userConstants = require('../constants/userConstants.js');
var request = require('superagent');

function create(content) {
    console.log(content);
    AppDispatcher.handleViewAction({
        actionType: userConstants.USER_CREATE,
        content: content
    })
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
