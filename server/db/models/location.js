'use strict';
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: ObjectId,
        ref: 'State',
        required: true
    },
    country: {
        type: ObjectId,
        ref: 'Country',
        required: true
    },
    zip: {
        type: String,
        required: true
    }
});

mongoose.model('Location', schema);