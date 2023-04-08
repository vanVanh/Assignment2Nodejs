var express = require('express');
var router = express.Router();
var siteCtrl = require('../contronller/site.controller');
var mdw = require('../middleware/check.middleware')
/* GET home page. */
router.get('/login', siteCtrl.login);
router.post('/login', siteCtrl.login);
router.get('/', mdw.check_login, siteCtrl.home);

module.exports = router;
