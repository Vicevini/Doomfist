const fs = require('fs');

const dados = JSON.parse(fs.readFileSync('./livros.json'));
const novoLivro = {
    id: '3',
    titulo: 'O Senhor dos Anéis',
    categoria: 'Fantasia'
}

fs.writeFileSync('./livros.json', JSON.stringify([...dados, novoLivro]))


console.log(JSON.parse(fs.readFileSync('./livros.json')))