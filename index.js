const express = require('express')
const consign = require('consign')

const app = express()

consign()
    .include('controllers')
    .into(app)

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

