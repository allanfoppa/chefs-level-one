// import {
//     endpointStoreRecipe
// } from '../constants/endpoint'

export const storeRecipe = async (data) => {

    let { name, spotlight, image, intro } = data

    const form = new FormData();
    form.append("file", image);
    form.append("name", name);
    form.append("spotlight", spotlight);
    form.append("intro", intro);
    // form.append("curriculum", JSON.stringify(curriculumToArray));
    // form.append("social_media", `{"facebook": "${socialLinksFacebook}","instagram": "${socialLinksInstagram}"}`);

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