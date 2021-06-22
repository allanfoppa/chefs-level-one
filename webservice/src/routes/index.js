import { Router } from 'express'
const routes = Router()

import {
  index as getRecipes,
  item as getById
} from '../controllers/recipes.controller.js'

routes.get('/api/v1/recipes', getRecipes)
routes.get('/api/v1/recipe-details/:id', getById)

export default routes