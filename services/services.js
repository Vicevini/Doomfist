const fs = require("fs");

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("./livros.json"));
}

function getLivroPorID(id) {
    const livros = JSON.parse(fs.readFileSync("./livros.json"));
    const livroFiltrado = livros.filter((livro) => livro.id === id);
    return livroFiltrado;
}

function getLivroPorCategoria(categoria) {
    const livros = JSON.parse(fs.readFileSync("./livros.json"));
    const categoriaFiltrada = livros.filter(
        (livro) => livro.categoria === categoria
    );
    return categoriaFiltrada;
}

function insereLivro(novoLivro) {
    const livros = JSON.parse(fs.readFileSync("./livros.json"));

    const novaLista = [...livros, novoLivro];
    fs.writeFileSync("./livros.json", JSON.stringify(novaLista));
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("./livros.json"));
    const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id);

    const conteudoModificado = {
        ...livrosAtuais[indiceModificado],
        ...modificacoes,
    };

    livrosAtuais[indiceModificado] = conteudoModificado;

    fs.writeFileSync("./livros.json", JSON.stringify(livrosAtuais));
}

function deletaLivro(id) {
    const livros = JSON.parse(fs.readFileSync("./livros.json"));
    const livrosFiltrado = livros.filter((livro) => livro.id !== id);
    fs.writeFileSync("./livros.json", JSON.stringify(livrosFiltrado));
}

module.exports = {
    getTodosLivros,
    getLivroPorID,
    getLivroPorCategoria,
    insereLivro,
    modificaLivro,
    deletaLivro,
};
