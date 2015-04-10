//routes/estado.js

module.exports = function(app){
	
	var controller = app.controllers.estado;
	var Autenticador = app.model.business.Autenticador;

	app.route('/listarEstados')
	.get(controller.listarEstados);

	app.route('/listarCidadesPorEstado/:sigla')
	.get(/*Autenticador.verificaAutenticacao,*/controller.listarCidadesPorEstado);

	app.route('/salvarEstado')
	.post(/*Autenticador.verificaAutenticacao,*/controller.salvarEstado);

	app.route('/salvarCidade')
	.post(/*Autenticador.verificaAutenticacao,*/controller.salvarCidade);


	}