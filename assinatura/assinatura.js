import { generateKeyPairSync, createSign, createVerify} from 'crypto'

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

let dados = "String assinatura"

// Assinatura
// createSign é um método que cria um objeto Sign
// recebe como parâmetros o algoritmo de assinatura e options que é opcional
const assinador = createSign('rsa-sha256')

assinador.update(dados)

const assinatura = assinador.sign(privateKey, 'hex')
console.log(`Assinatura: ${assinatura}`)

// Intermediário
dados += ' Arquivo alterado'
// assinatura já não é mais válida pois foi alterado

// Envio desse documento --------- Documento, assinatura e chave pública
const verificador = createVerify('rsa-sha256')

verificador.update(dados)

const ehVerificado = verificador.verify(publicKey, assinatura, 'hex')
console.log(ehVerificado)