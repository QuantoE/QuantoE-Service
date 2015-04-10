//model/business/Erro.js

module.exports = function(){

	var Erro = {};


	function Erro(codigo, descricao){
		this.codigo = codigo;
		this.descricao = descricao;
	}


	return Erro;


}