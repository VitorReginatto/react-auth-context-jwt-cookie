
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");

function generateBcryptHash(password) {
    let salt = bcryptjs.genSaltSync(10);
    let hash = bcryptjs.hashSync(password, salt);
    return hash;
}


class AuthService {

    static async signin(data,res) {
        try {
            if (!data.email || !data.password) throw new Error('Informe email/senha')
            const user = {
                id: 1, firstName: "Vitor", lastName: "Reginatto", email: "vitor_reginatto@hotmail.com", image: "https://avatars.githubusercontent.com/u/33152198?v=4", gender:"male"
            }
            if (!user) throw new Error('Nenhum usuário encontrado com esse e-mail.')

            const isMatch = bcryptjs.compareSync(data.password, generateBcryptHash('vitor@15')) //Simular generated como se buscasse no DB
            if (!isMatch) throw new Error('Email/Senha inválidos!')
            const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {
                expiresIn: "6h",
            });

            res.cookie("token", token, {
                httpOnly: true, // Cookie só pode ser acessado pelo servidor
                secure: false, // Colocar como true em produção (HTTPS)
                sameSite: "lax", // Configurações para proteção CSRF
              });

            const authResponse = {
                user: {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    image: user.image,
                    gender: user.gender
                },
            };
            return authResponse;
        } catch (error) {
            throw (error)
        }
    }
}





module.exports = AuthService;