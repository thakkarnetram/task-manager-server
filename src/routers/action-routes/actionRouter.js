const express = require('express');
const actionController = require('../../controllers/action-controller/actionController');
const authController = require('../../controllers/auth-controller/authController')

const router = express.Router();

router
    .route('/tasks')
    .get(authController.protect, actionController.getAllTask);
router
    .route('/tasks/:_id')
    .get(authController.protect, actionController.getTaskById);
router
    .route('/tasks')
    .post(authController.protect, actionController.createTask);
router
    .route("/tasks/:_id")
    .put(authController.protect, actionController.updateTask);
router
    .route("/tasks/:_id")
    .delete(authController.protect, actionController.deleteTask);

module.exports = router;
