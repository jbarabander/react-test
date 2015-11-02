var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var authConstants = require('../constants/authConstants');
var EventEmitter = require('events').EventEmitter;

var loggedInUser = null;
var CHANGE_EVENT = 'authChange';


function logout() {
    loggedInUser = null;
}

function login(user) {
    loggedInUser = user;
}

function isLoggedIn() {
    return !!loggedInUser;
}


function isAdmin() {
    return !!(isLoggedIn() && loggedInUser.isAdmin);
}

var AuthStore = Object.create(EventEmitter.prototype);

AuthStore.emitChange = function() {
    this.emit(CHANGE_EVENT);
};

AuthStore.addChangeListener = function(cb) {
    this.on(CHANGE_EVENT, cb);
};

AuthStore.removeChangeListener = function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
};

AuthStore.getLoggedInUser = function() {
    return loggedInUser;
};

AuthStore.dispatcherIndex = AppDispatcher(function(payload) {
    var action = payload.action;
    switch(action.actionType) {
        case authConstants.LOGIN_SUCCESS:
            login(action.user);
            AuthStore.emitChange();
            break;
        case authConstants.LOGOUT_SUCCESS:
            logout();
            AuthStore.emitChange();
            break;
    }
});

