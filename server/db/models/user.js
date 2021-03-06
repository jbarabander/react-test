'use strict'
var mongoose = require('mongoose');
var Promise = require('bluebird');
var bcrypt = Promise.promisifyAll(require('bcrypt'));
var md5 = require('md5');

var schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    firstName: String,
    lastName: String,
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        select: false
    },
    photoUrl: {
        type: String
    },
    backgroundUrl: {
        type: String
    },
    twitter: {
        id: String,
        username: String,
        token: String,
        tokenSecret: String
    },
    facebook: {
        id: String
    },
    google: {
        id: String
    },
});

schema.methods.hash = function(pass, cb) {
    var self = this;
    return bcrypt.genSalt(12, function(err, salt) {
        if(err) return cb(err);
        bcrypt.hash(pass, salt, function(err, hash) {
            if(err) return cb(err);
            self.password = hash;
            return cb();
        });
    });
};

schema.methods.hashPromise = function(pass) {
    var self = this;
    return bcrypt.genSaltAsync(12)
    .then(function(salt) {
            return bcrypt.hashAsync(pass, salt)
        })
    .then(function(hash) {
            self.password = hash;
        })
};

schema.methods.authenticate = function(pass, cb) {
    return bcrypt.compare(pass, this.password, function(err, res) {
        if(err) return cb(err);
        return cb(null, res);
    });
};

schema.methods.generateDefaultImg = function() {
    var trimAndLowCaseEmail = this.email.trim().toLowerCase();
    this.photoUrl = 'http://www.gravatar.com/avatar/' + md5(trimAndLowCaseEmail) + '?d=identicon&s=160';
};

schema.methods.authenticatePromise = function(pass) {
    return bcrypt.compareAsync(pass, this.password)
};

schema.pre('save', function(next) {
    if(!this.isNew) return next();
    this.hash(this.password, next);
});

schema.pre('save', function(next) {
    if(!this.isNew) return next();
    this.generateDefaultImg();
    next();
});

schema.statics.findByUsernameOrEmail = function(param, findOne) {
    if(findOne !== true) findOne = false;
    if(findOne === true) {
        return this.findOne({$or: [{username: param}, {email: param}]});
    }
    return this.find({$or: [{username: param}, {email: param}]});
};
//schema.pre('save', function(next) {
//    if(!this.isNew) return next();
//    this.hashPromise(this.password)
//    .then(function() {
//            next();
//        });
//});

mongoose.model('User', schema);