//public/js/controllers/OfertasController.js
angular.module('QuantoE-Service').controller('OfertasProdutoController', 

	function($scope, $resource, $routeParams) {
		var Ofertas = $resource('/buscarOfertasPorProduto/'+$routeParams.produto);
		$scope.ofertas = new Ofertas();
		
		Ofertas.query(function(ofertas) { 
			$scope.ofertas = ofertas; });



});