const express = require('express')
const app = express()
PORT = 3000



app.listen(PORT, function(){
    console.log('Servidor rodando na porta ' + PORT)
})