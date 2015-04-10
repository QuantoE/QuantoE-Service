//routes/departamento.js

module.exports = function(app){
	
	var controller = app.controllers.departamento;
	var Autenticador = app.model.business.Autenticador;

	//Lista todos os departamentos
	app.route('/listarDepartamentos')
	.get(controller.listarDepartamentos);

	//Salva um novo departamento
	app.route('/salvarDepartamento')
	.post(/*Autenticador.verificaAutenticacao,*/controller.salvarDepartamento);

	//Atualiza um novo departamento
	app.route('/atualizarDepartamento')
	.post(/*Autenticador.verificaAutenticacao,*/controller.atualizarDepartamento);

	//Remove um departamento
	app.route('/removerDepartamento')
	.post(/*Autenticador.verificaAutenticacao,*/controller.removerDepartamento);


	}