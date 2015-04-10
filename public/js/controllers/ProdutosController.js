//public/js/controllers/ProdutosController/js
angular.module('QuantoE-Service').controller('ProdutosController', 

	function($scope, $resource, $routeParams) {
		
		var Produto = $resource('/salvarProduto');
		$scope.produto = new Produto();
		var Departamentos = $resource('/listarDepartamentos');
		var ProdutosDepartamento = $resource('/buscarProdutosPorDepartamento/' + $routeParams.departamento);
		$scope.departamentos = new Departamentos();
		$scope.produtos = new ProdutosDepartamento();

			Departamentos.query(function(departamentos) { 
			$scope.departamentos = departamentos; });

			ProdutosDepartamento.query(function(produtos) { 
			$scope.produtos = produtos; });

		$scope.cadastrarProduto = function() 
		{ 
			console.log($scope.produto);
			$scope.produto.$save()
				.then(function(){
					$scope.mensagem = {texto : "Produto salvo com sucesso"};
					$scope.produto = new Produto();
				
				})
				.catch(function(erro){
					$scope.mensagem = {texto: "Não foi possível salvar o produto."};

					});

};
});