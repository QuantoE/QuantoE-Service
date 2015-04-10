//routes/produto.js
module.exports = function(app){
	

	var controller = app.controllers.produto;
	var Autenticador = app.model.business.Autenticador;

	//listar todos os produtos
	app.route('/listarProdutos')
	.get(controller.listarProdutos);

	//Buscar produtos por descricao
	app.route('/buscarProdutosPorDescricao/:descricao')
	.get(controller.buscarProdutosPorDescricao);

	//Buscar produtos por departamento
	app.route('/buscarProdutosPorDepartamento/:departamento')
	.get(controller.buscarProdutosPorDepartamento);

	//Buscar produtos por usuario
	app.route('/buscarProdutosPorUsuario/:_idUsuario')
	.get(controller.buscarProdutosPorUsuario);

	//Salvar novo produto 
	app.route('/salvarProduto')
	.post(/*Autenticador.verificaAutenticacao,*/ controller.salvarProduto);

	//Atualizar produto
	app.route('/atualizarProduto')
	.post(/*Autenticador.verificaAutenticacao,*/ controller.atualizarProduto);

	//Remover produto
	app.route('/removerProduto')
	.post(/*Autenticador.verificaAutenticacao,*/ controller.removerProduto);

}
