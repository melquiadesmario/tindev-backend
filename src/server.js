const express = require('express')
const routes = require('./routes')

const port = 3333
const server = express()

server.use(routes)

server.listen(port, () => console.log(`Server on Port ${ port }`))