const AuthService = require('../service/AuthService')
const jwt = require("jsonwebtoken");

module.exports = class AuthController {

   
    static async getAllProducts(req, res) {
        try {

            const items = [
                { id: 1, name: "Bobina" },
                { id: 2, name: "Papel" },
                { id: 3, name: "Caneta" },
                { id: 4, name: "Caderno" },
                { id: 5, name: "Lápis" },
                { id: 6, name: "Borracha" },
                { id: 7, name: "Marcador" },
                { id: 8, name: "Tesoura" },
                { id: 9, name: "Clipboard" },
                { id: 10, name: "Pasta" }
            ];
            return res.status(200).json(
                items)
        } catch (error) {
            console.log(error)
            return res.status(404).json({ message: "erro" });
        }

    }


}; 