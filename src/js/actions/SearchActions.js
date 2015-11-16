var AppDispatcher = require('../dispatchers/AppDispatcher.js');
var request = require('superagent');
var searchConstants = require('../constants/searchConstants.js');
var LoadingActions = require('./LoadingActions.js');

var search = (content) => {
    LoadingActions.startLoading();
    request.get('api/search')
        .query(content)
        .end((err, res) => {
            LoadingActions.stopLoading();
            if (err) throw new Error(err.message);
            AppDispatcher.handleViewAction({
                actionType: searchConstants.SEARCH_LAUNCH,
                content: JSON.parse(res.text)
            });
        })
};

module.exports = {search};