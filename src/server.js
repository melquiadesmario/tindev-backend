const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const port = 3333
const URI = 'mongodb://localhost:27017/tindev'

const server = express()

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DataBase is TRUE'))
    .catch((err) => console.log(err))

server.use(express.json())
server.use(routes)

server.listen(port, () => console.log(`Server on Port ${ port }`))