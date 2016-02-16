'use strict'
var mongoose = require('mongoose');
var Promise = require('bluebird');
var bcrypt = Promise.promisifyAll(require('bcrypt'));
var md5 = require('md5');
var phoneNumberRegex = /^1?\d{10} | \d{11}/; //FIXME
var ObjectId = mongoose.Schema.Types.ObjectId;

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
    headerUrl: {
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
    phoneNumber: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{10} | \d{11}/.test(v);
            },
            message: '{VALUE} is not a valid phone number.'
        }
    },
    placesVisited: [
        {
            date: {
                type: Date,
                default: Date.now
            },
            location: {
                type: ObjectId,
                ref: 'Location'

            }
        }
    ]
});


schema.methods.findRecentVisits = function(timePeriod, date) {
    var dateToTestAgainst = date ? date: Date.now();
    return this.placesVisited.filter(function(element) {
        return element.date - dateToTestAgainst <= timePeriod;
    });
};

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
    this.photoUrl = 'http://www.gravatar.com/avatar/' + md5(this.email.trim().toLowerCase()) + '?d=identicon&s=160';
};

schema.methods.authenticatePromise = function(pass) {
    return bcrypt.compareAsync(pass, this.password)
};

schema.methods.changePassword = function(pass, cb) {
    this.hash(pass, cb);
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