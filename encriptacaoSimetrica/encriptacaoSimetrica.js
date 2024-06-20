import { createCipheriv, randomBytes, createDecipheriv } from 'crypto'

// randomBytes é um método que gera dados aleatórios  
// que tem como parâmetro o número de bytes que serão gerados
const mensagem = 'Demonstração de mensagem'
const chave = randomBytes(32);
const vi = randomBytes(16);

// createCipheriv é um método que cria um objeto Cipher
// Possui parâmetros o algoritmo, a chave e o vetor de inicialização
// algoritmo é uma string dependente de OpenSSL
// OpenSSL é uma biblioteca para criptografia de dados
const cifra = createCipheriv('aes256', chave, vi)

const mensagemCifrada = cifra.update(mensagem, 'utf-8','hex') + cifra.final('hex')

console.log(mensagemCifrada)

// Transmissão ----------------- chave, vi, mensagem

// Decifrar a mensagem
// createDecipheriv é um método para criar um objeto Decipher
// utilizado para decifrar a mensagem cifrada
const decifra = createDecipheriv('aes256', chave, vi)

const mensagemDecifrada = decifra.update(mensagemCifrada,'hex', 'utf-8') + decifra.final('utf-8')

console.log(`mensagem: ${mensagemDecifrada}`)