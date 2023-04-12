const model = require("../../models/account.model");

exports.login = async (req, res, next) => {
    try {

        const user = await model.account.findByCredentials(req.body.username, req.body.password)
        if (!user) {
            return res.status(401).json({error: 'Sai thông tin đăng nhập'})
        }
        // đăng nhập thành công, tạo token làm việc mới
        await user.generateAuthToken()

        return res.status(200).json({ user })

    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: error.message})    }
};

exports.reg = async (req, res, next)=>{

    try {
        const salt = await bcrypt.genSalt(10);
        console.log(salt, req.body);
        
        const user = new model.account(req.body);

        user.password = await bcrypt.hash(req.body.password, salt);
 
        const token = await user.generateAuthToken();

        let new_u = await user.save()

        return res.status(201).json({ user: new_u, token })

    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: error.message})
    }
}

exports.profile = (req, res, next) => {
  res.json({ status: 200, msg: "Trang thông tin", data: req.user });
};

exports.logout = async (req, res, next) => {
  try {
    console.log(req.user);
    req.user.token = null; //xóa token
    await req.user.save();
    return res.status(200).json({ status: 200, msg: "Đăng xuất thành công" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, msg: error.message });
  }
};
