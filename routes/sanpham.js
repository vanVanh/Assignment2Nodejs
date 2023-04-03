var express = require('express');
var router = express.Router();
var sanPhamCtrl = require('../contronller/sanpham.controller');

//product
router.get('/product', sanPhamCtrl.listSp);

router.get('/addproduct', sanPhamCtrl.addProduct);
router.post('/addproduct', sanPhamCtrl.addProduct);

router.get('/product/detail/:id', sanPhamCtrl.detail);

router.get('/product/edit/:id', sanPhamCtrl.editProduct);
router.post('/product/edit/:id', sanPhamCtrl.updateProduct);

router.get('/product/delete/:id', sanPhamCtrl.deleteProduct);
router.post('/product/delete/:id', sanPhamCtrl.deleteProduct);

// category
router.get('/category', sanPhamCtrl.category);

router.get('/addcategory', sanPhamCtrl.addCategory);
router.post('/addcategory', sanPhamCtrl.addCategory);

router.get('/category/edit/:id', sanPhamCtrl.editCategory);
router.post('/category/edit/:id', sanPhamCtrl.updateCategory);

router.get('/category/delete/:id', sanPhamCtrl.deleteCategory);
router.post('/category/delete/:id', sanPhamCtrl.deleteCategory);


module.exports = router;