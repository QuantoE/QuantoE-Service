//public/js/controllers/EstabelecimentoController.js
angular.module('QuantoE-Service').controller('EstabelecimentoController', 

	function($scope, $resource, $routeParams) {
		
		var Estabelecimento = $resource('/salvarEstabelecimento');
		var Cidades = $resource('/listarCidadesPorEstado/' + $routeParams.sigla);
		var Estabelecimentos = $resource('/listarEstabelecimentos');
		$scope.estabelecimento = new Estabelecimento();
		$scope.cidades = new Cidades();
		$scope.estabelecimentos = new Estabelecimentos();
		
		Cidades.query(function(cidades) { 
			$scope.cidades = cidades[0].cidades; });

		Estabelecimentos.query(function(estabelecimentos) {
			$scope.estabelecimentos = estabelecimentos; });

		$scope.cadastrarEstabelecimento = function() 
		{ 
			$scope.estabelecimento.$save()
				.then(function(){
					$scope.mensagem = {texto : "Cidade salva com sucesso"};
					$scope.estabelecimento = new Estabelecimento();
				
				})
				.catch(function(erro){
					$scope.mensagem = {texto: "Não foi possível salvar a cidade."};
					});

};


});