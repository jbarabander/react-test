var Dispatcher = require('./Dispatcher.js');


var AppDispatcher = Object.create(Dispatcher.prototype);
AppDispatcher.handleViewAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};


module.exports = AppDispatcher;