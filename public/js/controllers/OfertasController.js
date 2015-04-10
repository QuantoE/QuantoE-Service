//public/js/controllers/OfertasController.js
angular.module('QuantoE-Service').controller('OfertasController', 

	function($scope, $resource, $routeParams) {
		
		var Estabelecimentos = $resource('/listarEstabelecimentos');
		var Produtos = $resource('/listarProdutos');
		var Oferta = $resource('/inserirAtualizarOferta');
		$scope.estabelecimentos = new Estabelecimentos();
		$scope.produtos = new Produtos();
		$scope.oferta = new Oferta();
		
		Estabelecimentos.query(function(estabelecimentos) { 
			$scope.estabelecimentos = estabelecimentos; });

		Produtos.query(function(produtos) { 
			$scope.produtos = produtos; });

		$scope.cadastrarOferta = function() 
		{ 
			$scope.oferta.$save()
				.then(function(){
					$scope.mensagem = {texto : "Oferta salva com sucesso"};
					$scope.oferta = new Oferta();
				
				})
				.catch(function(erro){
					$scope.mensagem = {texto: "Não foi possível salvar a oferta."};
					});

};


});