const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  Fname: String,
  phoneNumber: String,
  currency: String,
  password: String,
  imgPath: String,
});

let users = mongoose.model("users", UserSchema);
// export default users
module.exports = users;
