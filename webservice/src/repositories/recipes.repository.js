import { query } from "../config/database/index.js";

async function getRecipes() {
    const { rows } = await query(
        `
        SELECT
            uuid, name, slug, image, thumbs_up, thumbs_down
        FROM
            recipes
        ORDER BY
            id ASC
        `
    )
    return rows
}

async function getById(identifier) {
    const { rows } = await query(
        `
        SELECT
            name, intro, image, prep_time, servings, ingredients, instructions, nutrition_facts, thumbs_up, thumbs_down
        FROM
            recipes
        WHERE
            uuid = '${identifier}'
        `
    )
    return rows
}


export default {
    getRecipes,
    getById
}