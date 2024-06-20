const mensagemSecreta = 'minhamensagemsecreta'

console.log(mensagemSecreta)

function cifraMensagem(mensagem, movimentos) {
    const mensagemCifrada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0)
        return String.fromCharCode(codigoCaractere + movimentos)
    })

    return mensagemCifrada.join('')
}
const mensagemCifrada = cifraMensagem(mensagemSecreta, 3)

console.log(mensagemCifrada)

function decifraMensagem(mensagemCifrada, movimentos) {
    const mensagemDecifrada = mensagemCifrada.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0)
        return String.fromCharCode(codigoCaractere - movimentos)
    })

    return mensagemDecifrada.join('')
}

console.log(decifraMensagem(mensagemCifrada, 3))