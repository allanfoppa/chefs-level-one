import {
    endpointHome
} from '../constants/endpoint'

export const getCards = async () => {
    try {
        return await fetch(endpointHome)
    } catch (error) {
        return console.log('Houve um problema com a requisição Fetch: ' + error.message)
    }
}