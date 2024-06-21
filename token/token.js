import jwt from "jsonwebtoken"

const chaveSecreta = 'chaveSecreta'

const token = jwt.sign(
    {
        apelido: "rica",
        nome: "ricardo",
        idade: "22"
    }, chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token,chaveSecreta)

console.log(tokenDecodificado)