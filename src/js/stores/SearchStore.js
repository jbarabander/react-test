var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatchers/AppDispatcher');
var searchConstants = require('../constants/searchConstants.js');

var _searchResults = {users: null, locations: null};

var SearchStore = Object.create(EventEmitter.prototype);

SearchStore.getUsers = () => {
    
}

