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
		let data = await fetch(endpoint)

		let response = {
			payload: await data.json(),
			status: data.status
		}

		return response
	} catch (error) {
		return console.log('Houve um problema com a requisição Fetch: ' + error.message)
	}
}