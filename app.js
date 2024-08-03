const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
PORT = 3000

// Configurações
    // Usando o Handlebars como Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine','handlebars')

app.listen(PORT, function(){
    console.log('Servidor rodando na porta ' + PORT)
})