//public/js/controllers/ProdutosController/js
angular.module('QuantoE-Service').controller('CidadesController', 

	function($scope, $resource, $routeParams) {
		
		var Cidade = $resource('/salvarCidade');
		var Estados = $resource('/listarEstados');
		$scope.cidade = new Cidade();
		$scope.estados = new Estados();
		Estados.query(function(estados) { 
			$scope.estados = estados; });

		$scope.cadastrarCidade = function() 
		{ 
			console.log($scope.cidade);
			$scope.cidade.$save()
				.then(function(){
					$scope.mensagem = {texto : "Cidade salva com sucesso"};
					$scope.cidade = new Cidade();
				
				})
				.catch(function(erro){
					$scope.mensagem = {texto: "Não foi possível salvar a cidade."};
					});

};


});