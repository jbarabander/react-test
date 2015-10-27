Promise = require('bluebird');

_callbacks = [];
_promises = [];


//Dispatcher//
function Dispatcher() {

}
Dispatcher.prototype.register = function(cb) {
        _callbacks.push(cb);
        return _callbacks.length - 1;
};

Dispatcher.prototype.dispatch = function(payload) {
        var resolves = [];
        var rejects = [];
        _promises = _callbacks.map(function(_, i) {
            new Promise((resolve, reject) => {
                resolves[i] = resolve;
                rejects[i] = reject;
            });
        });
        _callbacks.forEach(function(cb, i) {
            Promise.resolve(cb).then(function() {
                resolves[i](payload);
            }, function() {
                rejects[i](new Error('Dispatcher callback unsuccessful'));
            })
        });
        _promises = [];
};

module.exports = Dispatcher;


