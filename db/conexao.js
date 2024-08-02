const Sequelize = require('sequelize')
const sequelize = new Sequelize('banco','root','senhaAqui', {
    host: 'localhost',
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/* Sincroniza a tabela com o BD
(só precisa executar uma vez) */
Postagem.sync({force: true})
Usuario.sync({force: true})