const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const movie = require('./routes/movie.route')

const app = express()
const port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false }))
app.use('/movies', movie)

app.get('/', (req, res) => res.send('greetings from express'))

let uri = '**************';
const mongoDB = process.env.MONGODB_URI || uri;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.listen(port, () => console.log(`Server listening at port ${port}`))
