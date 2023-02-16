const { getTodosLivros, getLivroPorID, getLivroPorCategoria, insereLivro } = require('../services/services')

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.send('Erro ao ler o arquivo')
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivroPorID(id)
        res.send(livro)
    } catch (error) {
        res.send('Erro ao ler o arquivo')
    }
}

function getCategoria(req, res) {
    try {
        const categoria = req.params.categoria
        const livro = getLivroPorCategoria(categoria)
        res.send(livro)
    } catch (error) {
        res.send('Erro ao ler o arquivo')
    }
}

function postLivro(req, res) {
    try {
        const novoLivro = req.body
        insereLivro(novoLivro)
        res.status(201)
        res.send('Livro publicado com sucesso')
    } catch (error) {
        res.status(500)
        res.send('Erro ao publicar livro')
    }
}

function patchLivros(req, res) {
    try {

    } catch (error) {
        res.send('Erro ao realizar patch')
    }
}

function deleteLivros(req, res) {
    try {

    } catch (error) {
        res.send('Erro ao tentar deletar')
    }
}

module.exports = { getLivros, postLivro, patchLivros, deleteLivros, getLivro, getCategoria }