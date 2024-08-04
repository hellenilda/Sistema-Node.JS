const banco = require('../db/banco')

const Post = banco.sequelize.define('postagens', {
    titulo: {
        type: banco.Sequelize.STRING
    },
    conteudo: {
        type: banco.Sequelize.TEXT
    }
})

// // CRIA A TABELA POSTAGENS:
// Post.sync({force: true})
//     .then(() => {
//         console.log('Modelo Post registrado')
//     })
//     .catch((erro) => {
//         console.log('Erro véi: '+erro)
//     })

  
module.exports = Post