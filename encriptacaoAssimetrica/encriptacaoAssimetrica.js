import { generateKeyPairSync } from 'crypto'

//generateKeyPairSync é um método que gera o par de chaves assimétricas(privada e publica)
// recebe como parâmetro o tipo da chave
// retorna um novo par de chaves assimétricas que possuem a string, buffer e o KeyObject
const { privateKey, publicKey } = generateKeyPairSync('rsa', 
    {
        //modulusLength é um número em bits, o tamanho da chave
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
})

//console.log(publicKey)
//console.log(privateKey)

import { publicEncrypt, privateDecrypt } from 'crypto'

//publicEncrypt é um método que é usado para encriptar o conteúdo
// do buffer com o parâmetro 'Key'
// possui dois parâmetros: Key e buffer
const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from('Mensagem secreta')
)

console.log(dadosCriptografados.toString('hex'))

// ------------ Transmissão -------------

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(`Dados decifrados: ${dadosDecifrados.toString('utf-8')}`)