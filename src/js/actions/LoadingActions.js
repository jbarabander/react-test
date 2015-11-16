let AppDispatcher = require('../dispatchers/AppDispatcher.js');
let loadingConstants = require('../constants/loadingConstants.js');

let startLoading = () => {
    AppDispatcher.handleViewAction({
        actionType: loadingConstants.LOADING_STARTED
    });
};
let stopLoading = () => {
    AppDispatcher.handleViewAction({
        actionType: loadingConstants.LOADING_STOPPED
    })
};

module.exports = {startLoading, stopLoading};

