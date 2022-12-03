var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var cors = require("cors");
var bcrypt = require("bcrypt");
var fileUpload = require("express-fileupload");
var mongoose = require("mongoose");
var PORT = 3001;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    method: ["GET", "POST"],
  })
);
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    // key: "UserID",
    secret: "temporary",
    resave: false,
    saveUninitialized: false,
    duration: 60 * 30 * 100,
    activeDuration: 60 * 60 * 100,
  })
);
app.use(express.json());
app.get("/", function (req, res) {
  //check if user session exists
  console.log("here");
  console.log(req.session.user);
  if (req.session.user) {
    res.render("/dashboard");
  } else res.render("/login");
});
// User Route
var userRoute = require("./routes/UserRoutes");
app.use(userRoute);
var dataRoute = require("./routes/DataRoutes");
app.use(dataRoute);
var uri =
  "mongodb+srv://root:root@tradebull.hpvhpmq.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function () {
    app.listen(PORT);
    console.log("server running on ".concat(PORT));
  });
mongoose.set("useFindAndModify", false);
// app.listen(PORT);
// console.log(`server running on ${PORT}`);
