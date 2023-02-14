const fs = require('fs')

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('./livros.json'))
}

function getLivroPorID(id) {
    const livros = JSON.parse(fs.readFileSync('./livros.json'))
    const livroFiltrado = livros.filter(livro => livro.id === id)
    return livroFiltrado
}

module.exports = { getTodosLivros, getLivroPorID }