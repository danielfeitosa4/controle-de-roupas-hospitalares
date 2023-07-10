const express = require('express')
const exphbs = require('express-handlebars')

const conn = require('./db/conn')

const app = express()

// Models
const Usuario = require('./models/Usuario')
const Profissional = require('./models/Profissional')

// Import Routers
const usuarioRoutes = require('./routers/usuarioRoutes')
const profissionalRoutes = require('./routers/profissionalRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())

app.use(express.static('public'))

app.use('/form', profissionalRoutes)
app.use('/usuarios', usuarioRoutes)

conn
  // .sync()
  .sync({ force: true })
  .then(() => {
    app.listen(4000)
  })
  .catch((err) => console.log(err))