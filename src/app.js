const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const Sequelize = require('sequelize')

PORT = 3000

// Configurações
// Usando o Handlebars como Template Engine
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine','handlebars')
// Conexão com o banco de dados
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/banco.db'
}).authenticate().then(function(){
    console.log('Conectou ao banco com sucesso')
}).catch(function(erro){
    console.log('Erro ao conectar: ' + erro)
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT)
})