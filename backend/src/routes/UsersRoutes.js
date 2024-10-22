const router = require("express").Router();

const UsersController = require('../controllers/UsersController');
const { verifyToken } = require("../middlewares/AuthMiddleware");

router.get("/getAllUsers", verifyToken, UsersController.getAllUsers)

module.exports = router
