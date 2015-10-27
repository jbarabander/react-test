var Dispatcher = require('./Dispatcher.js');

function AppDispatcher() {}

AppDispatcher.prototype = Object.create(Dispatcher.prototype);
AppDispatcher.prototype.handleViewAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
}

AppDispatcher.prototype.constructor = AppDispatcher;

module.exports = AppDispatcher;