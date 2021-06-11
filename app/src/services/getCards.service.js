/**
 * @module service/getCards
*/

import {
    endpointHome
} from '../constants/endpoint'

/**
 * Consulta ao BD as receitas cadastradas
 * @method
 * @returns {Array} - Retorna a lista de receitas
*/

export const getCards = async () => {
    try {
        return await fetch(endpointHome)
    } catch (error) {
        console.log('caiu no cacth')
        return console.log('Houve um problema com a requisição Fetch: ' + error.message)
    }
}