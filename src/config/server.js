const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const queryParser = require('express-query-int')

const port = process.env.PORT ? process.env.PORT : 3003
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, () => {
    console.log(`Backend is running in port: ${port}`)
})

module.exports = server