const {
    getTodosLivros,
    getLivroPorID,
    getLivroPorCategoria,
    insereLivro,
    modificaLivro,
    deletaLivro,
} = require("../services/services");

function getLivros(req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.send("Erro ao ler o arquivo");
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            const livro = getLivroPorID(id);
            res.send(livro);
        } else {
            res.status(422);
            res.send("ID inválido");
        }
    } catch (error) {
        res.send("Erro ao ler o arquivo");
    }
}

function getCategoria(req, res) {
    try {
        const categoriaID = req.params.categoria;
        const categoria = getLivroPorCategoria(categoriaID);
        res.send(categoria);
    } catch (error) {
        res.send("Erro ao ler o arquivo");
    }
}

function postLivro(req, res) {
    try {
        const novoLivro = req.body;

        if (req.body.titulo) {
            insereLivro(novoLivro);
            res.status(201);
            res.send("Livro publicado com sucesso");
        } else {
            res.status(422);
            res.send("Não foi possível publicar o livro");
        }
    } catch (error) {
        res.status(500);
        res.send("Erro ao publicar livro");
    }
}

function patchLivros(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const body = req.body;
            modificaLivro(body, id);
            res.send("Atualização realizada com sucesso");
        } else {
            res.status(422);
            res.send("ID inválido");
        }
    } catch (error) {
        res.status(500);
        res.send("Erro ao realizar atualização");
    }
}

function deleteLivros(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            deletaLivro(id);
            res.send("Livro deletado com sucesso");
        } else {
            res.status(422);
            res.send("ID inválido");
        }
    } catch (error) {
        res.status(422);
        res.send("Erro ao tentar deletar");
    }
}

module.exports = {
    getLivros,
    postLivro,
    patchLivros,
    deleteLivros,
    getLivro,
    getCategoria,
};
