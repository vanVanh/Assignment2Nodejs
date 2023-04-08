const model = require('../models/account.model')

exports.home = (req, res, next) => {
    
    res.render('home/home');
}
exports.login = async (req, res, next) => {
    let msg = '';
    if(req.method == 'POST'){
        try {
            let objU = await model.account.findOne({username: req.body.username});
            if(objU != null ){
                // tồn tại username ==> kiểm tra passwd
                
                if(objU.password == req.body.passwd){

                    // đúng thông tin tài khoản ==> lưu vào session
                    req.session.userLogin = objU; 
                    // chuyển trang về trang quản trị
                    return res.redirect('/');
                }else{
                    msg = 'Sai password';
                }
            }else{
                msg = 'Không tồn tại tài khoản: ' + req.body.username;
            }

        } catch (error) {
            msg = error.message;
        }
    } 
    res.render('login/login', {msg});
}