var express = require('express');
var router = express.Router();
var userCtrl = require('../contronller/user.controller')
var mdw = require('../middleware/check.middleware')

router.use(mdw.check_login)
/* GET users listing. */
router.get('/' , userCtrl.listUser);
router.get('/add', userCtrl.addUser);
router.post('/add', userCtrl.addUser);

router.get('/edit/:id', userCtrl.editAccount);
router.post('/edit/:id', userCtrl.updateAccount);

router.get('/delete/:id', userCtrl.deleteAccount);
router.post('/delete/:id', userCtrl.deleteAccount);

module.exports = router;
