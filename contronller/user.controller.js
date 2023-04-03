const models = require("../models/account.model");

// [get] /users/
exports.listUser = async (req, res, next) => {

   var account = await models.account.find();

    let role = ['admin', 'user']

    res.render('user/listUser',{account, role});
}

// [post] /users/add
exports.addUser = async (req, res, next) => {

    if ((req.method = "POST")) {
        let obj = new models.account();
        obj.fullname = req.body.fullname;
        obj.username = req.body.username;
        obj.password = req.body.password;
        obj.email = req.body.email;
        obj.role = req.body.role;
        
        try {
          let newData = await obj.save();
          console.log(newData);
        } catch (error) {
          console.log(error);
        }
      }

    res.render('user/addUser')
}

// [get] /users/edit/:id
exports.editAccount = async (req, res, next) => {

    let id = req.params.id
    var account = await models.account.findById(id);
 
    let role = ['admin', 'user']
 
    res.render('user/edit',{account, role});
}

// [post] /users/edit/:id
 exports.updateAccount= async (req, res, next) => {

    let id = req.params.id
    if ((req.method = "POST")) {
        let obj = new models.account();
        obj.fullname = req.body.fullname;
        obj.username = req.body.username;
        obj.password = req.body.password;
        obj.email = req.body.email;
        obj.role = req.body.role;

        obj._id = id
        
        try {
        await models.account.findByIdAndUpdate({_id: id}, obj);
          console.log(obj);
        } catch (error) {
          console.log(error);
        }
      }

    res.redirect('/users/')
}