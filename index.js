import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'

const app = express()

try {
    await db.authenticate()
    console.log('Conección exitosa a la base de datos')
} catch (error) {
    console.log(error)
}

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))
app.use('/auth', usuarioRoutes)

const port = 1337
app.listen(port, () =>{
    console.log(`El servidor esta funcionando en http://localhost:${port}`)
})