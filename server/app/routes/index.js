'use strict';
var router = require('express').Router();
module.exports = router;

//router.use('/members', require('./members/index'));
router.use('/users', require('./user.js'));
//router.use('/products', require('./products/index'));
//router.use('/reviews', require('./reviews/index'));
//router.use('/orders', require('./orders/index'));
//router.use('/cart', require('./cart/index'));
//router.use('/locations', require('./locations/index'));
//router.use('/states', require('./states/index'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
