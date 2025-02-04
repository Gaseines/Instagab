// Bibliotecas instaladas no projeto: 
// bcryptjs (manipular senhas) 
// cors (receber informaçòes da mesma origem) 
// dotenv (Variaveis do ambiente (invisiveis para o usuario))
// express (backend)
// express-validator (vai trabalhar entre as requisições para validar os dados)
// jsonwebtoken (verifica e valida os tokens dos usuários)
// mongoose (trabalhar com o db )
// multer (upload das imagens)

require("dotenv").config()

const express = require("express")
const path = require("path")
const cors = require("cors")

const port = process.env.PORT

const app = express()

//Config JSON and form data response
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes
const router = require("./routes/Router.js")
app.use(router)

//Solve CORS
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

//Upload derectory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

// DB connection
require("./config/db.js")


app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
})