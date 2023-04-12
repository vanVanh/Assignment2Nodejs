var express = require('express');
var router = express.Router();
var sanphamApiCtrl = require('../contronller/api/sanpham.api.controller');
var accountApiCtrl = require('../contronller/api/user.api.controller');
var mdw = require('../middleware/check_token_api.middleware')

/* GET home page. */
router.get('/products/list', sanphamApiCtrl.listProduct);
router.get('/categories/list', sanphamApiCtrl.listCategory);

router.post('/login', accountApiCtrl.login)
router.post('/register', accountApiCtrl.reg)
router.get('/users/profile', mdw.api_auth, accountApiCtrl.profile)
router.get('/logout', mdw.api_auth , accountApiCtrl.logout)


module.exports = router;