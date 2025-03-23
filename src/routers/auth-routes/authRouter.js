const express = require("express");
const authController = require('../../controllers/auth-controller/authController')

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

module.exports = router;
