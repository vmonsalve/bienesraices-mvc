import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))
app.use('/auth', usuarioRoutes)

const port = 1337
app.listen(port, () =>{
    console.log(`El servidor esta funcionando en http://localhost:${port}`)
})