const { getTodosLivros } = require('../services/services')

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.send('Erro ao ler o arquivo')
    }
}

function postLivros(req, res) {
    res.send('Postagem realizada com sucesso!')
}

function patchLivros(req, res) {
    res.send('Patch realizado com sucesso!')
}

function deleteLivros(req, res) {
    res.send('Delete realizado com sucesso!')
}

module.exports = { getLivros, postLivros, patchLivros, deleteLivros }