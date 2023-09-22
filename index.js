const express = require('express')
const app = express()
const port = 3000

const Routes = require('./src/routes/calculadora.js');

app.use(express.json())
app.use(Routes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})