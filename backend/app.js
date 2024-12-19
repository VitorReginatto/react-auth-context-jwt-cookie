const express = require("express");
require('dotenv').config();
const cookieParser = require('cookie-parser');

const cors = require('cors');
const app = express();
app.use(cookieParser());


app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true // Permitir cookies no CORS
}));

const morganConfig = require('./src/log/morganConfig');
morganConfig.morgan(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Rotas
const AuthRoutes = require('./src/routes/AuthRoutes')
const UsersRoutes = require('./src/routes/UsersRoutes')
const ProductsRoutes = require('./src/routes/ProductsRoutes')

app.use("/auth", AuthRoutes)
app.use("/users", UsersRoutes)
app.use("/products", ProductsRoutes)

app.get("/", (req, res) => {
    res.status(200).send("<h1>API Rodando</h1>");
});


const port = process.env.PORT_API || 3000;
app.listen(port, async () => {
    console.log(`Rodando servidor na porta ${port}`);
});

