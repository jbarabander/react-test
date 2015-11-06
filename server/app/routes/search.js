var router = require('express').Router();
var mongoose = require('mongoose');


router.get('/', function(req, res, next) {
    console.log('search');
    if(req.query.type) {
        return next();
    }

}, function(req, res, next) {
    if(req.query.type === 'user') {
        res.redirect('/api/users');
    } else {
        res.redirect('/api/locations');
    }
}); //FIXME: Possibly???

module.exports = router;