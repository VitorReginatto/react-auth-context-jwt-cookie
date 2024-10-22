const AuthService = require('../service/AuthService')
const jwt = require("jsonwebtoken");

module.exports = class AuthController {

   
    static async getAllUsers(req, res) {
        try {
            const users = [
                {
                    id: 1,
                    firstName: "Vitor",
                    lastName: "Reginatto",
                    email: "vitor_reginatto@hotmail.com",
                    image: "https://avatars.githubusercontent.com/u/33152198?v=4",
                    gender: "male"
                },
                {
                    id: 2,
                    firstName: "Ana",
                    lastName: "Silva",
                    email: "ana_silva@example.com",
                    image: "https://avatars.githubusercontent.com/u/33152199?v=4",
                    gender: "female"
                },
                {
                    id: 3,
                    firstName: "Carlos",
                    lastName: "Oliveira",
                    email: "carlos_oliveira@example.com",
                    image: "https://avatars.githubusercontent.com/u/33152200?v=4",
                    gender: "male"
                },
                {
                    id: 4,
                    firstName: "Maria",
                    lastName: "Fernandes",
                    email: "maria_fernandes@example.com",
                    image: "https://avatars.githubusercontent.com/u/33152201?v=4",
                    gender: "female"
                },
                {
                    id: 5,
                    firstName: "Felipe",
                    lastName: "Souza",
                    email: "felipe_souza@example.com",
                    image: "https://avatars.githubusercontent.com/u/33152202?v=4",
                    gender: "male"
                },
                {
                    id: 6,
                    firstName: "Juliana",
                    lastName: "Pereira",
                    email: "juliana_pereira@example.com",
                    image: "https://avatars.githubusercontent.com/u/33152203?v=4",
                    gender: "female"
                },
                {
                    id: 7,
                    firstName: "Lucas",
                    lastName: "Almeida",
                    email: "lucas_almeida@example.com",
                    image: "https://avatars.githubusercontent.com/u/33152204?v=4",
                    gender: "male"
                },
                {
                    id: 8,
                    firstName: "Roberta",
                    lastName: "Costa",
                    email: "roberta_costa@example.com",
                    image: "https://avatars.githubusercontent.com/u/33152205?v=4",
                    gender: "female"
                },
                {
                    id: 9,
                    firstName: "Gabriel",
                    lastName: "Melo",
                    email: "gabriel_melo@example.com",
                    image: "https://avatars.githubusercontent.com/u/33152206?v=4",
                    gender: "male"
                },
                {
                    id: 10,
                    firstName: "Isabela",
                    lastName: "Martins",
                    email: "isabela_martins@example.com",
                    image: "https://avatars.githubusercontent.com/u/33152207?v=4",
                    gender: "female"
                }
            ];
            return res.status(200).json(users)
        } catch (error) {
            console.log(error)
            return res.status(404).json({ message: "erro" });
        }

    }


}; 