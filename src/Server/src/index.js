const express = require('express')
const morgan = require('morgan')
const routesApi = require('./routes/index')

const server = express()
const PORT = 3001

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
})
server.use(morgan('dev'))
server.use(express.json())

server.use('/rickandmorty', routesApi)

server.get('/*', (req, res) => {
   res.status(201).send("<h1>Mi loco, aqui solo estoy 'yo'</h1>")
})

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
})