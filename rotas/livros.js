const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send('Salve cambada!')
})

module.exports = router