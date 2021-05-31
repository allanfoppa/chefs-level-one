import { query } from "../config/database/index.js";

async function getRecipes() {
    const { rows } = await query('SELECT * FROM recipes');
    return rows
}


export default {
    getRecipes
}