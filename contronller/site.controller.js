const model = require("../models/account.model");
const bcrypt = require("bcrypt");

exports.home = (req, res, next) => {
  res.render("home/home");
};
exports.login = async (req, res, next) => {
  let msg = "";
  if (req.method == "POST") {
    try {
      let objU = await model.account.findOne({ username: req.body.username });
      if (objU != null) {
        // tồn tại username ==> kiểm tra passwd
        if (objU.role == "admin") {
          let check_pass = await bcrypt.compare(req.body.passwd, objU.password);
          if (check_pass) {
            // đúng thông tin tài khoản ==> lưu vào session
            req.session.userLogin = objU;
            // chuyển trang về trang quản trị
            return res.redirect("/");
          } else {
            msg = "Sai password";
          }
        }else{
            msg = 'web for admin, user can not login'
        }
      } else {
        msg = "Không tồn tại tài khoản: " + req.body.username;
      }
    } catch (error) {
      msg = error.message;
    }
  }
  res.render("login/login", { msg });
};

exports.logout = (req, res, next) => {

    req.session.userLogin = null
    console.log("logout successfully");
    
    return res.redirect("/login");
};
