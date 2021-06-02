import { query } from "../config/database/index.js";

async function getRecipes() {
    const { rows } = await query('SELECT id, name, image, thumbs_up, thumbs_down FROM recipes ORDER BY id ASC');
    return rows
}


export default {
    getRecipes
}