var express = require('express');
var path = require('path');
require('./server/db/models/index.js');
var app = express();

app.use(require('./server/routes'));

app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/src/index.html'));
})


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('app listening on port 3000');
})