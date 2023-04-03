const db = require("./db");

const userSchema = new db.mongoose.Schema(
  {
    fullname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let account = db.mongoose.model("user", userSchema);

module.exports = {account}