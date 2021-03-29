const db = require("../config/database/index");

module.exports = {

    index: async (req, res) => {
        // INDEX CASE
        try {
            const { rows } = await db.query('SELECT * FROM recipes')

            return res.status(200).json(
                { message: 'Olá mundo novo', recipes: rows }
            )
        } catch (error) {
            console.error(error)

            return res.status(400).json(
                { message: 'Nenhuma receita cadastrada', lenght: 0 }
            )
        }

        // ITEM CASE
        // const { rows } = await db.query(
        //     'SELECT * FROM products WHERE productid = $1',
        //     [productId]
        // )

        // POST CASE
        // const productId = parseInt(req.params.id);
        // await db.query('DELETE FROM products WHERE productId = $1',
        // [productId]
        // )

        // PUT CASE
        // const { rows } = await db.query(
        //     "UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE productId = $4",
        //     [product_name, quantity, price, productId]
        // )

        // DELETE CASE
        // const { rows } = await db.query(
        //     'DELETE FROM products WHERE productId = $1',
        //     [productId]
        // )
    }
}