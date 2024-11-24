// Importação do express e do handlebars
const express = require('express')
const app = express()
const exphbl = require('express-handlebars')
app.engine('handlebars', exphbl.engine())
app.set('view engine', 'handlebars')

// Importação da conexão com o banco de dados
const conn = require('./db/conn')

// Encoda URL em seguida Json
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())
// Importa os asets da pasta public
app.use(express.static('public'))

// Importação das models do projeto
const Task = require('./models/Task')



// Conecta ao mySql e monitora a porta 3000


conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch(err => { console.log(`Erro ao conectar ao mysql: ${err}`) })