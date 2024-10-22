const jwt = require("jsonwebtoken");

module.exports = class AuthMiddleware {
  static async verifyToken(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
          return res.status(401).json({ message: "Acesso Negado. Token Ausente" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
      } catch (error) {
        return res.status(403).json({ message: "Token Inválido" });
      }
    }
};