var express = require('express');
var router = express.Router();
var userCtrl = require('../contronller/user.controller')

/* GET users listing. */
router.get('/', userCtrl.listUser);
router.get('/add', userCtrl.addUser);

module.exports = router;
