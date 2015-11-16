'use strict'
let AppDispatcher = require('../dispatchers/AppDispatcher.js');
let loadingConstants = require('../constants/loadingConstants.js');
let EventEmitter = require('events').EventEmitter;

let spinnerLoading = false;
let CHANGE_EVENT = 'spinnerChange';

let setSpinnerToFalse = () => {
    spinnerLoading = false;
};

let setSpinnerToTrue = () => {
    spinnerLoading = true;
};

let SpinnerStore = Object.assign({}, EventEmitter.prototype, {
    getSpinnerStatus() {
        return spinnerLoading;
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherIndex: AppDispatcher.register(payload => {
        var action = payload.action;
        switch(action.actionType) {
            case loadingConstants.LOADING_STARTED:
                setSpinnerToTrue();
                SpinnerStore.emitChange();
                break;
            case loadingConstants.LOADING_STOPPED:
                setSpinnerToFalse();
                SpinnerStore.emitChange();
                break;
        }
        return true;

    })
});

module.exports = SpinnerStore;