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

//function isAdmin() {
//    return !!(isLoggedIn() && loggedInUser.isAdmin);
//}

var AuthStore = Object.create(EventEmitter.prototype);

AuthStore.getLoggedInUser = function() {
    return loggedInUser;
};

AuthStore.isLoggedIn = function() {
    return !!loggedInUser;
};

AuthStore.isAdmin = function() {
    return !!(this.isLoggedIn() && loggedInUser.isAdmin);
}

AuthStore.emitChange = function() {
    this.emit(CHANGE_EVENT);
};

AuthStore.addChangeListener = function(cb) {
    this.on(CHANGE_EVENT, cb);
};

AuthStore.removeChangeListener = function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
};


AuthStore.dispatcherIndex = AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.actionType) {
        case authConstants.LOGIN_SUCCESS:
            login(action.content);
            AuthStore.emitChange();
            break;
        case authConstants.LOGOUT_SUCCESS:
            logout();
            AuthStore.emitChange();
            break;
    }
});

module.exports = AuthStore;
