//public/js/controllers/OfertasController.js
angular.module('QuantoE-Service').controller('OfertasEstabelecimentoController', 

	function($scope, $resource, $routeParams) {
		var Ofertas = $resource('/buscarOfertasPorEstabelecimento/'+$routeParams.estabelecimento);
		$scope.ofertas = new Ofertas();
		
		Ofertas.query(function(ofertas) { 
			$scope.estabelecimento = $routeParams.estabelecimento;
			$scope.ofertas = ofertas[0].ofertas; });



});