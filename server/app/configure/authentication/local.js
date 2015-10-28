'use strict';
var passport = require('passport');
var _ = require('lodash');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function (app) {

    // When passport.authenticate('local') is used, this function will receive
    // the email and password to run the actual authentication logic.
    var strategyFn = function (email, password, done) {
        console.log(arguments);
        User.findOne({ email: email })
            .then(function (user) {
                console.log(user);
                // user.correctPassword is a method from the User schema.
                if (!user || !user.correctPassword(password)) {
                    done(null, false);
                } else {
                    // Properly authenticated.
                    done(null, user);
                }
            }, function (err) {
                done(err);
            });
    };

    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, strategyFn));

    // A POST /login route is created to handle login.
    app.post('/login', function (req, res, next) {
        var authCb = function (err, user) {
            console.log('here', user);
            if (err) return next(err);

            if (!user) {
                console.log("failed");
                var error = new Error('Invalid login credentials.');
                error.status = 401;
                return next(error);
            }

            // req.logIn will establish our session.
            req.logIn(user, function (loginErr) {
                console.log("logged in ", user);
					 console.log(loginErr);
                if (loginErr) return next(loginErr);
                //mergeCart merges session cart with user cart in the db
                user.mergeCart(req.session.cart, function(err, user){
                    if(err) return next(err);
                    //user cart has been updated, so session cart can just be set to user cart
                    //!! needs to be populated
                    // We respond with a response object that has user with _id and email.
                    console.log('user cart', user.cart)
                    req.session.cart = user.cart;
                    res.status(200).send({
                        user: _.omit(user.toJSON(), ['password', 'salt'])
                    });

                });
            });

        };

        passport.authenticate('local', authCb)(req, res, next);

    });

};
