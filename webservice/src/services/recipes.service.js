import RecipesRepository from '../repositories/recipes.repository.js'

async function getRecipes() {
    return await RecipesRepository.getRecipes();
}

export default {
    getRecipes
}