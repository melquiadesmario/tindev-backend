const express = require('express')
const server = express()

const port = 3333

server.get('/', (req, res) => {
    return res.send(`Hello ${ req.query.name }`)
})

server.listen(port, () => console.log(`Server is Running on Port ${ port }`))