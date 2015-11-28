var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var _ = require('lodash');

router.param('userId', function(req, res, next, id) {
    User.findById(id)
    .then(function(user) {
            req.foundUser = user;
            next();
        })
    .then(null, next);
});

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

router.get('/', function(req, res, next) {
    var searchParam = req.query.searchParam;
    User.findByUsernameOrEmail(searchParam)
    .then(function(users) {
            res.json(users);
        })
    .then(null, next);
});
//FIXME: Possibly??

router.get('/:userId', function(req, res) {
    console.log(req.foundUser);
    res.json(req.foundUser);
});

router.put('/:userId', function(req, res, next) {
    if(req.user === req.foundUser || req.user.isAdmin) {
        if(!req.user.isAdmin) {
            delete req.body.isAdmin;
        }
        _.merge(req.foundUser, req.body);
        req.foundUser.save().exec()
        .then(function(user) {
                res.json(user);
            })
        .then(null, next);
    } else {
        next()
    }
});

module.exports = router;