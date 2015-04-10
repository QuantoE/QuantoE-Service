//routes/estabelecimento.js

module.exports = function(app){
	
	var controller = app.controllers.estabelecimento;
	var Autenticador = app.model.business.Autenticador;

	//Listar todos os estabelecimentos
	app.route('/listarEstabelecimentos')
	.get(controller.listarEstabelecimentos);

	//Listas estabelecimentos proximos
	app.route('/listarEstabelecimentosProximos/:cidade')
	.get(controller.listarEstabelecimentosProximos);

	//Buscar ofertas por estabelecimento
	app.route('/buscarOfertasPorEstabelecimento/:estabelecimento')
	.get(controller.buscarOfertasPorEstabelecimento);

	//Buscar ofertas por produto
	app.route('/buscarOfertasPorProduto/:produto')
	.get(controller.buscarOfertasPorProduto);

	//Buscar ofertas por departamento e estabelecimento
	app.route('/buscarOfertasPorDepartamentoEstabelecimento/:departamento/:estabelecimento')
	.get(controller.buscarOfertasPorDepartamentoEstabelecimento);

	//Buscar ofertas por departamento
	app.route('/buscarOfertasPorDepartamento/:departamento')
	.get(controller.buscarOfertasPorDepartamento);	

	//Salvar novo estabelecimento
	app.route('/salvarEstabelecimento')
	.post(/*Autenticador.verificaAutenticacao,*/ controller.salvarEstabelecimento);

	//Atualizar novo estabelecimento
	app.route('/atualizarEstabelecimento')
	.post(/*Autenticador;verificaAutenticacao,*/ controller.atualizarEstabelecimento);

	//Remover estabelecimento
	app.route('/removerEstabelecimento')
	.post(/*Autenticador.verificaAutenticacao,*/ controller.removerEstabelecimento);

	//Cadastrar ou atualizar oferta
	app.route('/inserirAtualizarOferta')
	.post(/*Autenticador.verificaAutenticacao,*/ controller.inserirAtualizarOferta);

	//Remover oferta
	app.route('/removerOferta')
	.post(/*Autenticador.verificaAutenticacao,*/ controller.removerOferta);





}