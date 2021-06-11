/**
 * @module service/storeRecipe
*/

// import {
//     endpointStoreRecipe
// } from '../constants/endpoint'

/**
 * Faz o envio de uma nova receita
 * @method
 * @param {string} name - Nome da receita
 * @param {boolean} spotlight - Se a receita é destaque ou não
 * @param {object} image - Imagem da receita
 * @returns {string|array} - Mensagem de sucesso ou erro
*/

export const storeRecipe = async (data) => {

    let { name, spotlight, image, intro } = data

    const form = new FormData()
    form.append("file", image)
    form.append("name", name)
    form.append("spotlight", spotlight)
    form.append("intro", intro)
    // form.append("curriculum", JSON.stringify(curriculumToArray))
    // form.append("social_media", `{"facebook": "${socialLinksFacebook}","instagram": "${socialLinksInstagram}"}`)

    const consoleObj = {}

    consoleObj.nome = name
    consoleObj.destaque = spotlight
    consoleObj.imagem = image
    consoleObj.intro = intro

    console.table(consoleObj)

    return
    // try {
    //     return await fetch(endpointStoreRecipe, params)
    // } catch (error) {
    //     console.log('caiu no cacth')
    //     return console.log('Houve um problema com a requisição Fetch: ' + error.message)
    // }
}