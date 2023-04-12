const db = require("./db");
const jwt = require("jsonwebtoken"); // khai báo jsonwebtoken
const chuoi_ky_tu_bi_mat = process.env.TOKEN_SEC_KEY;
const bcrypt = require("bcrypt");

const userSchema = new db.mongoose.Schema(
  {
    fullname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    token: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

//hamf taoj token đăng nhập với api
userSchema.methods.generateAuthToken = async function () {

  const user = this
  console.log(user)
  const token = jwt.sign({_id: user._id, username: user.username}, chuoi_ky_tu_bi_mat)
  // user.tokens = user.tokens.concat({token}) // code này dành cho nhiều token, ở demo này dùng 1 token
  user.token = token;
  await user.save()
  return token
}

//hàm tìm kiếm user theo id
//dùng để đăng nhập
userSchema.statics.findByCredentials = async (username, password) => {
  const user = await account.findOne({username: username})
  if (!user) {
    throw new Error({ error: "không tồn tại user" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "sai password" });
  }
  return user;
};

let account = db.mongoose.model("user", userSchema);
module.exports = { account };
