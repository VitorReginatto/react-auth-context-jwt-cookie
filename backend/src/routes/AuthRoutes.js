const router = require("express").Router();
const rateLimit = require('express-rate-limit');
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // Limite de 5 tentativas
    message: 'Muitas tentativas de login. Tente novamente mais tarde.'
});

const AuthController = require('../controllers/AuthController');
const { verifyToken } = require("../middlewares/AuthMiddleware");

router.post("/signin", AuthController.signin)
router.get("/getAuthenticatedUser", AuthController.getAuthenticatedUser)
router.post("/logout", AuthController.logout)
router.get("/getProducts", verifyToken, AuthController.getProducts)

module.exports = router
