const express = require('express')
const app = express()
PORT = 3000

app.get('/', function(req, res) {
    res.send('Funcionando')
})

app.get('/login/:nome', function(req, res) {
    res.send('Olá, '+req.params.nome)
})

app.get('/Cadastro', function(req, res) {
    res.send('Cadastro')
})

app.listen(PORT, function(){
    console.log('Servidor rodando na porta ' + PORT)
})