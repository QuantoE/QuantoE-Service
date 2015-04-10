//public/js/controllers/ProdutosController/js
angular.module('QuantoE-Service').controller('EstadosController', 

	function($scope, $resource, $routeParams) {
		
		var Estado = $resource('/salvarEstado');
		$scope.estado = new Estado();
		$scope.cadastrarEstado = function() 
		{ 
			console.log($scope.estado);
			$scope.estado.$save()
				.then(function(){
					$scope.mensagem = {texto : "Estado salvo com sucesso"};
					$scope.estado = new Estado();
				
				})
				.catch(function(erro){
					$scope.mensagem = {texto: "Não foi possível salvar o estado."};
					});

};


});