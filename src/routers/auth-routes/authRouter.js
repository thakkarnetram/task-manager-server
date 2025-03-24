const express = require("express");
const authController = require('../../controllers/auth-controller/authController')

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/reset").post(authController.resetPasswordLink);
router
    .route("/reset/:_id")
    .get(authController.resetPasswordPage)
    .post(authController.handleResetPassword);
module.exports = router;
