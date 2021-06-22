import pkg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Client } = pkg

const configDB = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
}

const client = new Client(configDB)

client.connect(err => {
    if (err) throw err
    else {
        populateDatabase()
    }
})

function populateDatabase() {
    const query = `
        INSERT INTO public.recipes (name, spotlight, image, ingredients, instructions, nutrition_facts, thumbs_up, thumbs_down, intro, prep_time,servings)
        VALUES ('Almondegas ao estilo asiático', TRUE, 'http://localhost:3333/images/almondegas.jpg', '[{"600 g": "Carne moída", "2 colheres de sopa": "Farinha de trigo", "1/2 colher de sopa": "Gengibre fresco ralado", "4 colheres de sopa": "Shoyu", "A gosto": "Pimenta", "1 colher de sopa": "Coentro picado"}]'::json::json, '[{"Passo 1": "Em uma tigela média, tempere a carne moída com todos os ingredientes, exceto os legumes picados. Misture bem com o auxílio de uma espatula ou colher grande."},{"Passo 2": "Divida a carne em partes iguais, comece dividindo ao meio, depois divida ao meio novamente, até obter 20 partes iguais. Se desejar, continue dividindo ao meio até chegar no tamanho desejado. Particularmente, prefiro almondegas menores, que de para comer em uma única mordida."},{"Passo 3": "Feito isso, reserve as almôndegas."},{"Passo 4": "Ligue o fogo em temperatura alta, e coloque uma frigideira grande para esquentar. Regue com um pouco de azeite e deixe ele ficar bem quente. Em seguida, acomode as almondegas, mas deixe um pouco de espaço entre elas, assim ficarão mais douradas e crocantes."},{"Passo 5": "Grelhe dos dois lados até obter uma casquinha dourada. Nesse ponto, pode adicionar os legumes e 3 colheres de sopa de shoyo, e 5 colheres de sopa de água filtrada."},{"Passo 6": "Tampe, e deixe cozinhando por aproximadamente 5 minutos, ou até que os legumes tenham descongelado. Se estiver usando legumes frescos, o tempo será um pouco maior, fique de olho para não queimar e se necessário, coloque água aos poucos para cozinhar corretamente os legumes."},{"Passo 7": "Quando os legumes estiverem al dente, desligue e sirva em seguida."},{"Passo 8": "Gosto de salpicar amendoim torrado em comidas com inspirações asiáticas, mas esse é um habito particular. Sinta-se a vontade para acrescenta-lo ao se prato também."},{"Passo 9": "Sirva acompanhado de arroz branco (comum ou para sushi) ou como petisco."}]'::json::json, '[{"calories": "219.9"}, {"total fat": "10.7g"}, {"satured fat": "2.2g"}, {"cholesterol": "37.4mg"}, {"protein": "7.9g"}]'::json::json, 0, 0,'Essas almôndegas formam um par perfeito com arroz branco, ou sozinhas, como petiscos.', 30, 4);

        INSERT INTO public.recipes (name, spotlight, image, ingredients, instructions, nutrition_facts, thumbs_up, thumbs_down, intro, prep_time,servings)
        VALUES ('Moqueca de peixe fácil', FALSE, 'http://localhost:3333/images/almondegas.jpg', '[{"1": "Limão", "1 colher de chá": "Sal", "1": "Cebola grande fatiada", "1": "Pimentão amarelo fatiado", "1": "Pimentão vermelho fatiado", "2": "Tomates fatiados", "200ml": "Leite de coco", "1 colher de sopa": "Azerite de dendê", "3 colheres de sopa": "Coentro picado"}]'::json::json, '[{"Passo 1": "Tempere as postas de peixe com o sal e o suco de limão. Espalhe bem e reserve."},{"Passo 2": "Em uma panela de ferro ou barro média faça uma camada com metade da cebola, dos tomates e dos pimentões."},{"Passo 3": "Por cima, coloque as postas do peixe, salpique metade da coentro, cubra com o restante da cebola, tomate e pimentões. Acrescente o caldo de limão da marinara, o leite de coco e o azeite dendê."},{"Passo 4": "Leve a panela ao fogo alto até ferver com a panela tampada, quando levantar fervura abaixe o fogo e cozinhe por aproximadamente 15 minutos, ou até que o peixe fique macio ao toque do garfo."},{"Passo 5": "Desligue o fogo e salpique o restante do coentro. Sirva em seguida com farofa de banana e arroz."}]'::json::json, '[{"calories": "105"}, {"total fat": "2.7g"}, {"satured fat": "1.2g"}, {"cholesterol": "17.4mg"}, {"protein": "18.9g"}]'::json::json, 0, 0,'Moqueca de peixe rápido, fácil e absolutamente delicioso ! Postas de peixe fresco cozidos em um caldo com cebola, tomate, pimentões e leite de coco.', 36, 2);

        INSERT INTO public.recipes (name, spotlight, image, ingredients, instructions, nutrition_facts, thumbs_up, thumbs_down, intro, prep_time,servings)
        VALUES ('Arroz branco', FALSE, 'http://localhost:3333/images/almondegas.jpg', '[{"1": "Limão", "1 colher de chá": "Sal", "1": "Cebola grande fatiada", "1": "Pimentão amarelo fatiado", "1": "Pimentão vermelho fatiado", "2": "Tomates fatiados", "200ml": "Leite de coco", "1 colher de sopa": "Azerite de dendê", "3 colheres de sopa": "Coentro picado"}]'::json::json, '[{"Passo 1": "Tempere as postas de peixe com o sal e o suco de limão. Espalhe bem e reserve."},{"Passo 2": "Em uma panela de ferro ou barro média faça uma camada com metade da cebola, dos tomates e dos pimentões."},{"Passo 3": "Por cima, coloque as postas do peixe, salpique metade da coentro, cubra com o restante da cebola, tomate e pimentões. Acrescente o caldo de limão da marinara, o leite de coco e o azeite dendê."},{"Passo 4": "Leve a panela ao fogo alto até ferver com a panela tampada, quando levantar fervura abaixe o fogo e cozinhe por aproximadamente 15 minutos, ou até que o peixe fique macio ao toque do garfo."},{"Passo 5": "Desligue o fogo e salpique o restante do coentro. Sirva em seguida com farofa de banana e arroz."}]'::json::json, '[{"calories": "105"}, {"total fat": "2.7g"}, {"satured fat": "1.2g"}, {"cholesterol": "17.4mg"}, {"protein": "18.9g"}]'::json::json, 0, 0,'Moqueca de peixe rápido, fácil e absolutamente delicioso ! Postas de peixe fresco cozidos em um caldo com cebola, tomate, pimentões e leite de coco.', 36, 2);

        INSERT INTO public.recipes (name, spotlight, image, ingredients, instructions, nutrition_facts, thumbs_up, thumbs_down, intro, prep_time,servings)
        VALUES ('Arroz integral', FALSE, 'http://localhost:3333/images/almondegas.jpg', '[{"1": "Limão", "1 colher de chá": "Sal", "1": "Cebola grande fatiada", "1": "Pimentão amarelo fatiado", "1": "Pimentão vermelho fatiado", "2": "Tomates fatiados", "200ml": "Leite de coco", "1 colher de sopa": "Azerite de dendê", "3 colheres de sopa": "Coentro picado"}]'::json::json, '[{"Passo 1": "Tempere as postas de peixe com o sal e o suco de limão. Espalhe bem e reserve."},{"Passo 2": "Em uma panela de ferro ou barro média faça uma camada com metade da cebola, dos tomates e dos pimentões."},{"Passo 3": "Por cima, coloque as postas do peixe, salpique metade da coentro, cubra com o restante da cebola, tomate e pimentões. Acrescente o caldo de limão da marinara, o leite de coco e o azeite dendê."},{"Passo 4": "Leve a panela ao fogo alto até ferver com a panela tampada, quando levantar fervura abaixe o fogo e cozinhe por aproximadamente 15 minutos, ou até que o peixe fique macio ao toque do garfo."},{"Passo 5": "Desligue o fogo e salpique o restante do coentro. Sirva em seguida com farofa de banana e arroz."}]'::json::json, '[{"calories": "105"}, {"total fat": "2.7g"}, {"satured fat": "1.2g"}, {"cholesterol": "17.4mg"}, {"protein": "18.9g"}]'::json::json, 0, 0,'Moqueca de peixe rápido, fácil e absolutamente delicioso ! Postas de peixe fresco cozidos em um caldo com cebola, tomate, pimentões e leite de coco.', 36, 2);
    `

    client
        .query(query)
        .then(() => {
            console.log('Finished execution, exiting now')
            client.end(console.log('Closed client connection'))
            process.exit()
        })
        .catch((err) => {
            console.log(err)
            process.exit()
        })
}