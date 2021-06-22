import RecipesService from '../services/recipes.service.js'

export async function index(_req, res) {
    try {

        let rows = await RecipesService.getRecipes()

        if (rows.length === 0) return res
            .status(404)
            .json({ message: 'Não há receitas cadastradas :(' })
        else return res
            .status(200)
            .json({ message: `Foram encontradas ${rows.length} receita(s)`, data: rows });

    } catch (error) {
        console.error(error);
        return res.status(400).json(
            { message: 'Houve algum erro na aplicação' }
        );
    }
}

export async function item(req, res) {
    try {
        const identifier = req.params.id
        let rows = await RecipesService.getById(identifier)

        if (rows.length === 0) return res
            .status(404)
            .json({ message: 'Receita não encontrada :(' })
        else return res
            .status(200)
            .json({ data: rows });

    } catch (error) {
        console.error(error);
        return res.status(400).json(
            { message: 'Houve algum erro na aplicação' }
        );
    }
}