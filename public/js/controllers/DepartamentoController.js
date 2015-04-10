//public/js/controllers/DepartamentoController.js
angular.module('QuantoE-Service').controller('DepartamentoController', 

	function($scope, $resource, $routeParams) {
		
		var Departamento = $resource('/salvarDepartamento');
		$scope.departamento = new Departamento();
		$scope.cadastrarDepartamento = function() 
		{ 
			$scope.departamento.$save()
				.then(function(){
					$scope.mensagem = {texto : "Departamento salvo com sucesso"};
					$scope.departamento = new Departamento();
				
				})
				.catch(function(erro){
					$scope.mensagem = {texto: "Não foi possível salvar o departamento."};

					});

};
});