function getLivros(req, res) {
    res.send('Consulta realizada com sucesso!')
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