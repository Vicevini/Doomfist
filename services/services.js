const fs = require('fs')

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('./livros.json'))
}

function getLivroPorID(id) {
    const livros = JSON.parse(fs.readFileSync('./livros.json'))
    const livroFiltrado = livros.filter(livro => livro.id === id)
    return livroFiltrado
}

function getLivroPorCategoria(categoria) {
    const livros = JSON.parse(fs.readFileSync('./livros.json'))
    const livroFiltrado = livros.filter(livro => livro.categoria === categoria)
    return livroFiltrado
}

function insereLivro(novoLivro) {
    const livros = JSON.parse(fs.readFileSync('./livros.json'))

    const novaLista = [...livros, novoLivro]
    fs.writeFileSync('./livros.json', JSON.stringify(novaLista))
}

module.exports = { getTodosLivros, getLivroPorID, getLivroPorCategoria, insereLivro }