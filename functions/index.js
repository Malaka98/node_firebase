const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const serverless = require('serverless-http');
app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', require('./routes/hello'))

module.exports.handler = serverless(app);