const db = require("../config/database/index");

module.exports = {
    index: async (req, res) => {
        try {
            const { rows } = await db.query('SELECT * FROM recipes')

            return res.status(200).json(
                { message: `Foram encontradas ${rows.length} receita(s)`, data: rows }
            )
        } catch (error) {
            console.error(error)

            return res.status(400).json(
                { message: 'Nenhuma receita cadastrada', lenght: 0 }
            )
        }
    }
}