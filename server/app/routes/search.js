var router = require('express').Router();
var mongoose = require('mongoose');
var Promise = require('bluebird');
var User = mongoose.model('User');

function searchQuerySpecify(obj, type) {
    return !obj.type || obj.type === type;
}

router.get('/', function(req, res, next) {
    console.log('search');
    var obj = {};
    if(searchQuerySpecify(req.query, 'user')) {
        obj.users = User.findByUsernameOrEmail(req.query.q)
    }
    if(searchQuerySpecify(req.query, 'location')) {
    }

    Promise.props(obj)
    .then(function(obj) {
            console.log(obj);
            res.json(obj);
        })

});
module.exports = router;