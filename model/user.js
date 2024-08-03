const User = function(req, res) {
    nome: {
        type: Sequelize.STRING
    }
    idade: {
        type: Sequelize.INTEGER
    }
    cpf: {
        type: Sequelize.NUMBER
    }
}

module.exports = User;