const router = require("express").Router();

const ProductsController = require('../controllers/ProductsController');
const { verifyToken } = require("../middlewares/AuthMiddleware");

router.get("/getAllProducts", verifyToken, ProductsController.getAllProducts)

module.exports = router
