'use strict'
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatchers/AppDispatcher');
var userConstants = require('../constants/userConstants.js');
var _ = require('lodash');

var _users = {};
var CHANGE_EVENT = 'userChange';

function create(content) {
    //request.post('/api/post')
    //.send(obj)
    _users[Date.now()] = content;
    console.log(_users);
}

function destroy(id) {
    delete _users[id];
}

function update(id, obj) {
    _users[id] = _.merge(_users[id], obj);
}


var UserStore = Object.create(EventEmitter.prototype);

UserStore.getAll = function() {
    return _users;
};

UserStore.emitChange = function() {
    this.emit(CHANGE_EVENT);
};

UserStore.addChangeListener = function(callback) {
    this.on(CHANGE_EVENT, callback);
};

UserStore.removeChangeListener = function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
};

UserStore.dispatcherIndex = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        case userConstants.USER_CREATE:
            if (Object.keys(action.content).length !== 0) {
                create(action.content);
                UserStore.emitChange();
            }
            break;

        case userConstants.USER_DESTROY:
            destroy(action.id);
            UserStore.emitChange();
            break;

        case userConstants.USER_UPDATE:
            update(action.id, action.content);
            UserStore.emitChange();
            break;

        // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }
    return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = UserStore;
//it seems like a store is the place that communicates with the backend