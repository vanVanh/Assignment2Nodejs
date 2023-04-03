const models = require("../models/sanpham.model");

// [get] /sp/product
exports.listSp = async (req, res, next) => {
  var category = await models.category.find();

  // search theo category
  let search = null;
  if (typeof (req.query.category) != "undefined") {
    search = { id_category: req.query.category };
  }

  var product = await models.product.find(search).populate("id_category");

  res.render("sanpham/listSp", { product, category });
};

// [get] /sp/category
exports.category = async (req, res, next) => {
  var list = await models.category.find();
  res.render("sanpham/listLoaiSp", { list });
};

// [post] /sp/addproduct
exports.addProduct = async (req, res, next) => {
  var list = await models.category.find();

  if ((req.method = "POST")) {
    let obj = new models.product();
    obj.name = req.body.name;
    obj.id_category = req.body.category;
    obj.price = req.body.price;
    obj.description = req.body.description;
    obj.status = req.body.status;
    obj.quantity = req.body.quantity;
    obj.image = req.body.image;
    obj.manufacturer = req.body.manufacturer;

    try {
      let newData = await obj.save();
      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  }

  res.render("sanpham/addproduct", { list });
};

// [post] /sp/addcategory
exports.addCategory = (req, res, next) => {
  res.render("sanpham/addCategory");
};

// [get] /sp/product/detail/:id
exports.detail = async (req, res, next) => {

    let idsp = req.params.id
    let obj = await models.product.findById(idsp)
    console.log(obj);

    res.render("sanpham/detail", {obj});
};

// [get] /sp/product/edit/:id
exports.editProduct= async (req, res, next) => {

  var list = await models.category.find();

  let id = req.params.id;
  let obj = await models.product.findById(id);
  console.log(obj.status);
  let status = [
    {name: 'new'},
    {name: 'used'}
  ]

  res.render("sanpham/editProduct", {list, obj, status});
};

// [post] /sp/product/edit/:id
exports.updateProduct= async (req, res, next) => {

  // var list = await models.category.find();

  let id = req.params.id;
  // let obj = await models.product.findById(id);
  // let status = [{name: 'New'},{name: 'Used'}]

  if(req.method == 'POST'){
    
    let updateData = new models.product();
    updateData.name = req.body.name;
    updateData.id_category = req.body.category;
    updateData.price = req.body.price;
    updateData.description = req.body.description;
    updateData.status = req.body.status;
    updateData.quantity = req.body.quantity;
    updateData.image = req.body.image;
    updateData.manufacturer = req.body.manufacturer;
    updateData._id = id
    try {
      await models.product.findByIdAndUpdate({_id: id}, updateData);
      console.log(updateData);
    } catch (error) {
      console.log(error);
    }
  }

  res.redirect('/sp/product')
};


exports.deleteProduct = async (req, res, next) => {
  let id = req.params.id;
  console.log(id);

  try {
      await models.product.findByIdAndDelete({_id: id});
      console.log("delete successfully");
  } catch {
      console.log('Lỗi server!');
  }



  res.redirect('/sp/product')
}
