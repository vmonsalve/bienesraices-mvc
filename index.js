const express = require('express')

const app = express()

app.get('/', function(req, res){
    res.json({msg: 'Hola Mundo'})
})


const port = 1337
app.listen(port, () =>{
    console.log(`El servidor esta funcionando en http://localhost:${port}`)
})