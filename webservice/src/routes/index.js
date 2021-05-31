import { Router } from 'express'
const routes = Router()

import RecipesController from '../controllers/recipes.controller.js'

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

routes.get('/v1/api/recipes', RecipesController.index)

export default routes