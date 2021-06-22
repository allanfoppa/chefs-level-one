import { endpointRecipeDetails } from '../constants/endpoint'

/**
 * Consulta ao BD uma receita especifica passando o ID
 * @module service/getRecipeById
 * @method
 * @param {uuid} - ID da receita para a consulta ao BD
 * @returns {Array} - Retorna a receita
*/

export const getRecipeById = async (uuid) => {
	try {

		let endpoint = endpointRecipeDetails(uuid)
		return await fetch(endpoint)
	} catch (error) {
		return console.log('Houve um problema com a requisição Fetch: ' + error.message)
	}
}