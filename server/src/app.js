console.log('hi')
const express = require('express')
const bodyParser = require('body-parser') // process json data easily
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json()) // parse json express in a sentence
app.use(cors()) // allow server can be hited from any domain

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.PORT || 8083)