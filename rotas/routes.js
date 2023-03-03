const { Router } = require("express")
const { getLivros, postLivro, patchLivros, deleteLivros, getLivro, getCategoria } = require("../controladores/controller")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivro)

router.get('/categoria/:categoria', getCategoria)

router.post('/', postLivro)

router.patch('/:id', patchLivros)

router.delete('/', deleteLivros)

module.exports = router