'use strict'
var AppDispatcher = require('../dispatchers/AppDispatcher');
var searchConstants = require('../constants/searchConstants.js');
var EventEmitter = require('events').EventEmitter;

var _searchResults = {users: null, locations: null};

var CHANGE_EVENT = 'searchChange';

function update(content) {
    _searchResults = content;
}

var SearchStore = Object.assign({}, EventEmitter.prototype, {
    getUsers: function () {
        return _searchResults.users;
    },
    getLocations: function () {
        return _searchResults.locations;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherIndex: AppDispatcher.register(payload => {
        var action = payload.action;
        switch (action.actionType) {
            case searchConstants.SEARCH_LAUNCH:
                update(action.content);
                //console.log(_searchResults);
                SearchStore.emitChange();
                break;
        }
        return true;
    })

    });


module.exports = SearchStore;