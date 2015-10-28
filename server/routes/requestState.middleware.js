var express = require('express');
var session = require('express-session');
var passport = require('passport');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var cookieParser = require('cookie-parser');

router.use(session({
    secret: require('../env/index.js').SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

passport.serializeUser(function(user, done) {
    done(null, user._id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, done).populate('');
});

router.use(passport.initialize());
router.use(passport.session());

module.exports = router;
