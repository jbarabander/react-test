var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.post('/', function(req, res, next) {
    if(req.user && !req.user.isAdmin) delete req.body.isAdmin;
    User.create(req.body)
    .then(function(user) {
            req.login(user, function(error) {
                if(error) throw new Error();
                res.json(user);
            })
        })
    .then(null, next);
});

module.exports = router;