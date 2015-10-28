var express = require('express');
router = express.Router();

router.use(require('./static.middleware.js'));
router.use(require('./requestState.middleware.js'));
router.use(require('./auth/local.js'));

module.exports = router;