const models = require("../models/account.model");
const bcrypt = require("bcrypt");
// [get] /users/
exports.listUser = async (req, res, next) => {
  let search = null;
  let dk_sort = null;
  let type = req.query.type;
  if (typeof req.query.sort != "undefined") {
    dk_sort = { username: req.query.type };
  }

  if (typeof req.query.name != "undefined") {
    search = { username: req.query.name };
  }

  var account = await models.account.find(search).sort(dk_sort);

  res.render("user/listUser", { account, type });
};

// [post] /users/add
exports.addUser = async (req, res, next) => {
  if (req.method == "POST") {
    let obj = new models.account();
    obj.fullname = req.body.fullname;
    obj.username = req.body.username;
    let salt = await bcrypt.genSalt(10);
    obj.password = await bcrypt.hash(req.body.password, salt);
    obj.email = req.body.email;
    obj.role = req.body.role;

    try {
      let newData = await obj.save();
      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  }

  res.render("user/addUser");
};

// [get] /users/edit/:id
exports.editAccount = async (req, res, next) => {
  let id = req.params.id;
  let msg = "";
  var account = await models.account.findById(id);

  let role = ["admin", "user"];

  if (req.method == "POST") {
    let obj = new models.account();
    obj.fullname = req.body.fullname;
    obj.username = req.body.username;
    let salt = await bcrypt.genSalt(10);
    obj.password = await bcrypt.hash(req.body.password, salt);
    obj.email = req.body.email;
    obj.role = req.body.role;

    obj._id = id;

    try {
      if (req.body.password == req.body.reEnterPassword) {
        await models.account.findByIdAndUpdate({ _id: id }, obj);
        console.log('update successfully');
        console.log(obj);
        return res.redirect("/users/");
      } else {
        msg = "update fail, password and re-enter password are not the same";
      }
    } catch (error) {
      console.log(error);
    }
  }

  res.render("user/edit", { account, role, msg });
};

exports.deleteAccount = async (req, res, next) => {
  let id = req.params.id;
  console.log(id);

  try {
    await models.account.findByIdAndDelete({ _id: id });
    console.log("delete successfully");
  } catch {
    console.log("Lỗi server!");
  }

  res.redirect("/users/");
};
