const express = require('express')
const routes = express.Router()

const HomeController = require('../controllers/HomeController')
const ExemplesController = require('../controllers/ExemplesController')

// index    = GET
// item     = GET/:ID
// create   = POST
// update   = PUT
// delete   = DELETE

// routes.get('/item', IndexController.index)
// routes.get('/item/:id', ItemController.item)
// routes.post('/item', CreateController.create)
// routes.put('/item/:id', UpdateController.update)
// routes.delete('/item/:id', DeleteController.delete)

routes.get('/', HomeController.index)

routes.get('/exemplos', ExemplesController.index)

module.exports = routes