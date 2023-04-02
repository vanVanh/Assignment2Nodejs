var express = require('express');
var router = express.Router();
var sanPhamCtrl = require('../contronller/sanpham.controller');
/* GET home page. */
router.get('/product', sanPhamCtrl.listSp);
router.get('/category', sanPhamCtrl.category);

router.get('/addproduct', sanPhamCtrl.addProduct);
router.post('/addproduct', sanPhamCtrl.addProduct);

router.get('/addcategory', sanPhamCtrl.addCategory);

router.get('/detail/:id', sanPhamCtrl.detail);

module.exports = router;