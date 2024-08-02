const app = require('app.js')
const { Sequelize } = require('sequelize')

app.get('/', (req, res) => {
    console.log('Funcionando')
})