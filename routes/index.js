var express = require('express');
var router = express.Router();
var siteCtrl = require('../contronller/site.controller');
/* GET home page. */
router.get('/login', siteCtrl.login);
router.get('/', siteCtrl.home);

module.exports = router;
