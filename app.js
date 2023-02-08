const express = require('express');
const rotaLivro = require("./rotas/routes")

const app = express()

app.use('/livro', rotaLivro)

const port = 8000;

app.listen(port, () => {
    console.log(`Capitão Teemo no comando at localhost: ${port}`)
})