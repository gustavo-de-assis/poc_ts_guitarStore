# poc_ts_guitarStore
Exercício de proof of concept de TypeScript.

Um colecionador decidiu guardar informações de suas guitarras para vendê-las futuramente.

Foram utilizados os tipos das bibliotecas no projeto, além de criado novos para facilitar na identificação dos atributos.

Segue abaixo as rotas:

[POST] "/register" -> Cria um novo registro no banco. sempre que o colecionador receber ou comprar uma nova guitarra, ele guardará suas informações de modelo, marca, valor de venda e ano de fabricação.

ele deve passar um objeto no campo body da requisição da seguinte maneira:

{
  model: "meu_modelo",
  brand: "marca_do_prod",
  price: valor_em_centavos,
  year: "ano_de_fabricacao"
}

Se tudo correr bem, ele receberá uma mensagem 'Product resgistered successfully!' com status 201;

[GET]"/products" -> Lista todos produtos no banco. Retornará uma array de objetos no formato acima, jundo de seu id de cadastro no banco.

[GET]"/products/:id" -> Listará um produto em específico, de acordo com o id passado por parâmetro. Caso o id não exista, retornará status 404 (Not Found). Caso o id não seja um número, retornará status 400 com mensagem "Invalid id".

[DELETE]"remove/:id" -> Quando vendida uma guitarra, o colecionador irá tentar remover um produto do banco. Antes de remover, ele checa a existência do produto, seguindo a mesma ideia da roda "products/:id". Se existir, ele tenta remover. Se tudo sair como esperado, retornará status 200 com mensagem "OK".

[PATCH]"update/:id" -> Caso o colecionador queira atualizar um valor ou por acaso se enganou em alguma das informações ele vai querer alterar essa informação. Para isso, esta rota receberá o id do produto a ser atualizado, além de um body na requisição para alterar a informação desejada. 

