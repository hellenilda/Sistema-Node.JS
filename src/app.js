const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
PORT = 3000

// Hospedando o servidor na porta 3000 (PORT)
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT)
})

// Usando o Handlebars como Template Engine
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine','handlebars')

// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Conexão com o banco de dados
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/db/banco.db'
}).authenticate().then(function(){
    console.log('Conectou ao banco com sucesso')
}).catch(function(erro){
    console.log('Erro ao conectar: ' + erro)
})

// Rotas
app.get('/', (req, res) => {
    res.send('Rota /')
})

app.get('/cadastro', (req, res) => {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    req.body.conteudo
    res.send('Texto: ' + req.body.titulo + ' | Conteúdo: ' + req.body.conteudo)
})