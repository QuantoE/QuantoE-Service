//views/js/main.js
angular.module('QuantoE-Service', ['ngRoute', 'ngResource'])
.config(function($routeProvider, $httpProvider) {

	$httpProvider.interceptors.push('meuInterceptor');

	$routeProvider.when('/cadastrarProdutos',
	 { templateUrl: 'partials/cadastroProdutos.html', controller: 'ProdutosController' });

	$routeProvider.when('/cadastrarEstados',
	 { templateUrl: 'partials/cadastroEstado.html', controller: 'EstadosController' });

		$routeProvider.when('/cadastrarCidades',
	 { templateUrl: 'partials/cadastroCidades.html', controller: 'CidadesController' });

		$routeProvider.when('/cadastrarEstabelecimentos',
	 { templateUrl: 'partials/cadastroEstabelecimento.html', controller: 'EstabelecimentoController' });

		$routeProvider.when('/cadastrarOfertas',
	 { templateUrl: 'partials/cadastroOfertas.html', controller: 'OfertasController' });

		$routeProvider.when('/cadastrarDepartamentos',
	 { templateUrl: 'partials/cadastroDepartamento.html', controller: 'DepartamentoController' });

	$routeProvider.when('/listarCidades',
	 { templateUrl: 'partials/listaCidades.html', controller: 'EstabelecimentoController' });

		$routeProvider.when('/listarEstados',
	 { templateUrl: 'partials/listaEstados.html', controller: 'CidadesController' });

	$routeProvider.when('/listarEstabelecimentos',
	 { templateUrl: 'partials/listaEstabelecimentos.html', controller: 'EstabelecimentoController' });

		$routeProvider.when('/listarEstabelecimentosProximos',
	 { templateUrl: 'partials/listaEstabelecimentos.html', controller: 'EstabelecimentoCidadesController' });

		$routeProvider.when('/listarProdutos',
	 { templateUrl: 'partials/listaProdutos.html', controller: 'OfertasController' });

		$routeProvider.when('/buscarProdutosPorDepartamento',
	 { templateUrl: 'partials/listaProdutos.html', controller: 'ProdutosController' });

		$routeProvider.when('/listarOfertasPorProdutos',
	 { templateUrl: 'partials/listaOfertas.html', controller: 'OfertasProdutoController' });

		$routeProvider.when('/listarOfertasPorEstabelecimento',
	 { templateUrl: 'partials/listaOfertas.html', controller: 'OfertasEstabelecimentoController' });

		$routeProvider.when('/auth', { templateUrl: 'partials/auth.html' })
});