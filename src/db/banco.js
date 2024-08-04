const Sequelize = require('sequelize')

// Conexão com o banco de dados
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/db/banco.db'
})

module.exports = {
    Sequelize,
    sequelize
}