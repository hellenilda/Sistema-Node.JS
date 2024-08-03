const express = require('express')
const app = express()
PORT = 3000

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/view/home.html')
})

app.get('/login', function(req, res) {
    res.send('Bem vindo!')
})

app.get('/Cadastro', function(req, res) {
    res.send('Cadastro')
})

app.listen(PORT, function(){
    console.log('Servidor rodando na porta ' + PORT)
})