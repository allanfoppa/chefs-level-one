import RecipesRepository from '../repositories/recipes.repository.js'

async function getRecipes() {
    return await RecipesRepository.getRecipes();
}

async function getById(identifier) {
    return await RecipesRepository.getById(identifier);
}

export default {
    getRecipes,
    getById
}