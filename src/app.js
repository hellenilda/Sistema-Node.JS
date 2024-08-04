const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
PORT = 3000

// Usando o Handlebars como Template Engine
app.engine('handlebars', engine({
    defaultLayout: 'main',
    // Permitir o acesso a propriedades do protótipo:
    runtimeOptions: {
    allowProtoPropertiesByDefault: true
    }
}))
app.set('view engine','handlebars')

// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rotas
app.get('/', (req, res) => {
    // Exibir todas as postagens: Mais recente -> mais antiga
    Post.findAll({order: [['id','DESC']]})
    .then((posts) => {
        res.render('home', { posts: posts })
    })
    .catch((erro) => {
        res.send('Houve um erro: '+erro)
    })
})

app.get('/cadastro', (req, res) => {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    .then(() => {
        res.redirect('/')
    })
    .catch((erro) => {
        res.send('Houve um erro:'+erro)
    })
})

// Hospedando o servidor na porta 3000 (PORT)
app.listen(PORT, () => {
    console.log('Acesse em http://localhost:' + PORT)
})