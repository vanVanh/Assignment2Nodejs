var express = require('express');
var router = express.Router();
var apiCtrl = require('../contronller/api/sanpham.api.controller');

/* GET home page. */
router.get('/products/list', apiCtrl.listProduct);
router.get('/categories/list', apiCtrl.listCategory);

module.exports = router;