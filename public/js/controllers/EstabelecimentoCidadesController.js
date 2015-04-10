//public/js/controllers/EstabelecimentoController.js
angular.module('QuantoE-Service').controller('EstabelecimentoCidadesController', 

	function($scope, $resource, $routeParams) {

		var Estabelecimentos = $resource('/listarEstabelecimentosProximos/' + $routeParams.cidade);
		$scope.estabelecimentos = new Estabelecimentos();

		Estabelecimentos.query(function(estabelecimentos) {
			$scope.estabelecimentos = estabelecimentos; });

});