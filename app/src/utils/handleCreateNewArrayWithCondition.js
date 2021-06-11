/**
 * @module utils/handleCreateNewArrayWithCondition
*/

let arr = []

/**
 * Cria um novo array com items que passam sobre a condição
 * @method
 * @param {Array} list - Lista com todas as receitas
 * @param {number|boolean} target - Verifica se o spolight vindo é true ou false
 * @returns {Array} - Retorna um array com as receitas destaques
*/

const handleCreateNewArrayWithCondition = (list, target) => {
    for (const item of list) if(item[target]) arr.push(item)
    return arr
}

/**
 * Cria um novo array com items que passam sobre a condição
 * @method
 * @param {Array} list - Lista com todas as receitas
 * @param {number|boolean} target - Verifica se o spolight vindo é true ou false
 * @returns {Array} - Retorna um array com as receitas destaques
*/

export const handleCreateNewArrayWithCondition2 = (list, target) => {
    for (const item of list) if(item[target]) arr.push(item)
    return arr
}

export default handleCreateNewArrayWithCondition