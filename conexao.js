const Sequelize = require('sequelize')
const sequelize = new Sequelize('banco','root','senhaAqui', {
    host: 'localhost',
    dialect: 'mysql'
})