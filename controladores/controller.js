const { getTodosLivros, getLivroPorID, getLivroPorCategoria, insereLivro, modificaLivro } = require('../services/services')

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
        const categoriaID = req.params.categoria
        const categoria = getLivroPorCategoria(categoriaID)
        res.send(categoria)
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
        const id = req.params.id
        const body = req.body
        modificaLivro(body, id)
        res.send('Atualização realizada com sucesso')

    } catch (error) {
        res.status(500)
        res.send('Erro ao realizar atualização')
    }
}

function deleteLivros(req, res) {
    try {

    } catch (error) {
        res.send('Erro ao tentar deletar')
    }
}

module.exports = { getLivros, postLivro, patchLivros, deleteLivros, getLivro, getCategoria }