const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemysql2', 'root', '123456', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos ao Mysql!')
} catch (err) {
    console.log(`Erro ao tentar conectar ao Mysql: ${err}`)
}

module.exports = sequelize