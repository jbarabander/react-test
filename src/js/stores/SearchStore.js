var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatchers/AppDispatcher');
var searchConstants = require('../constants/searchConstants.js');

var _searchResults = {users: null, locations: null};

var SearchStore = Object.create(EventEmitter.prototype);

var CHANGE_EVENT = 'searchChange';

function update(content) {
    _searchResults = content;
};

SearchStore.getUsers = function() {
    return _searchResults.users;
};


SearchStore.getLocations = function() {
    return _searchResults.locations;
};



SearchStore.emitChange = function() {
    this.emit(CHANGE_EVENT);
};

SearchStore.addChangeListener = function(cb) {
    this.on(CHANGE_EVENT, cb);
};

SearchStore.removeChangeListener = function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
};

SearchStore.dispatcherIndex = AppDispatcher.register(payload => {
    var action = payload.action;

    switch(action.actionType) {
        case searchConstants.SEARCH_LAUNCH:
            update(action.content);
            SearchStore.emitChange();
            break;

        // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }
    return true; // No errors. Needed by promise in Dispatcher.
});

module.exports = SearchStore;