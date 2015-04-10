//models/business/Autenticador.js

function verificaAutenticacao(req, res, next) {
 if (req.isAuthenticated()) { 
 	return next(); 
 } else { 
 	res.status('401').json('Não autorizado'); 
 } }


 module.exports = function(){

 	var Autenticador = {};
 	Autenticador.verificaAutenticacao = verificaAutenticacao;
 	return Autenticador;
 }