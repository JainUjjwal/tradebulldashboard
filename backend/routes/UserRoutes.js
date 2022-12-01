const express = require("express");
const router = express.Router();

const loginController = require("../controllers/userController/loginController");
const registerController = require("../controllers/userController/registerController");
const logoutController = require("../controllers/userController/logoutController");

router.post("/login", loginController.login_user_post);
router.get("/login", loginController.login_user_get);

router.post("/register", registerController.register);

router.post("/logout", logoutController.logout);
module.exports = router;
