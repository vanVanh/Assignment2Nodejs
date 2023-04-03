var express = require('express');
var router = express.Router();
var sanPhamCtrl = require('../contronller/sanpham.controller');

router.get('/product', sanPhamCtrl.listSp);
router.get('/category', sanPhamCtrl.category);

router.get('/addproduct', sanPhamCtrl.addProduct);
router.post('/addproduct', sanPhamCtrl.addProduct);

router.get('/addcategory', sanPhamCtrl.addCategory);

router.get('/product/detail/:id', sanPhamCtrl.detail);

router.get('/product/edit/:id', sanPhamCtrl.editProduct);
router.post('/product/edit/:id', sanPhamCtrl.updateProduct);

router.get('/product/delete/:id', sanPhamCtrl.deleteProduct);
router.post('/product/delete/:id', sanPhamCtrl.deleteProduct);

module.exports = router;