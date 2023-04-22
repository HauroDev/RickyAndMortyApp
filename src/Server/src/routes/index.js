const getCharById = require('../controllers/getCharById')
const { postFav, deleteFav } = require('../controllers/handleFavorites')
const login = require('../controllers/login')
const express = require('express')

const routesApi = express.Router()

routesApi.get('/login', login)
routesApi.get('/character/:id', getCharById)
routesApi.post('/fav', postFav)
routesApi.delete('/fav/:id', deleteFav)


module.exports = routesApi