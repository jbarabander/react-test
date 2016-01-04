'use strict';
var path = require('path');
var chalk = require('chalk');
var util = require('util');

var rootPath = path.join(__dirname, '../../../');
var indexPath = path.join(rootPath, './dist/views/index.html');
var viewsPath = path.join(rootPath, './dist/views');
var faviconPath = path.join(rootPath, './server/app/views/favicon.ico');

var env = require(path.join(rootPath, './server/env'));

var logMiddleware = function (req, res, next) {
    util.log(('---NEW REQUEST---'));
    console.log(util.format(chalk.red('%s: %s %s'), 'REQUEST ', req.method, req.path));
    console.log(util.format(chalk.yellow('%s: %s'), 'QUERY   ', util.inspect(req.query)));
    console.log(util.format(chalk.cyan('%s: %s'), 'BODY    ', util.inspect(req.body)));
    next();
};

module.exports = function (app) {
    app.engine('html', require('swig').renderFile);
    app.set('view engine', 'html');
    app.set('views', viewsPath);
    app.setValue('env', env);
    app.setValue('projectRoot', rootPath);
    app.setValue('indexHTMLPath', indexPath);
    app.setValue('faviconPath', faviconPath);
    app.setValue('log', logMiddleware);
};
