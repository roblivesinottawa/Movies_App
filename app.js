const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('hello from express'))






app.listen(port, () => console.log(`Server listening at port ${port}`))
