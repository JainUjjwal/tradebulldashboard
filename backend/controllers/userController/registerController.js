const bcrypt = require("bcrypt");
const users = require("../../models/userModel");
const saltRounds = 10;

const register = (req, res) => {
  let uploadPath = "";
  if (req.files) {
    const image = req.files.image;
    uploadPath = "/var/www/html/userImages/" + req.body.username + ".jpg";
    image.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
    });
  }
  bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
    if (err) {
      console.log(err);
    }
    const data = {
      username: req.body.username,
      Fname: req.body.Fname,
      phoneNumber: req.body.phoneNumber,
      currency: "USD",
      password: hash,
      imgPath: uploadPath,
    };
    await users.find({ username: req.body.username }, async (err, result) => {
      if (err) {
        console.log(err);
      }
      // console.log(result);
      if (result.length > 0) {
        res.status(203).send({ err: "user already exists" });
      } else {
        let newUser = new users(data);
        await newUser.save().then((result) => {
          req.session.user = newUser;
          res
            .status(202)
            .send({ userId: result._id, message: "Sign up successful" });
        });
      }
    });
  });
};

module.exports = { register };
