//controllers/produto.js
module.exports = function(app) {
	var Produto = app.model.Produto;
    var Erro = app.model.business.Erro;
 	var controller = {};

 	//Lista todos os produtos
  	controller.listarProdutos = function(req, res) {
      Produto.find().exec()
        .then(
          function(produtos){
            res.json(produtos);
          },
          function(erro){
            console.error(erro);
            res.status(500).json(erro);
          });

  	}; 

    //Buscar produtos por descricao
    controller.buscarProdutosPorDescricao = function(req, res){
      var descricao = req.params.descricao;
      var criterio = {"descricao" : new RegExp(descricao, 'i')};
      Produto.find(criterio).exec()
      .then(
        function(produtos){
          res.json(produtos);
        },
        function(erro){
          console.error(erro);
          res.status(500).json(erro);
        });

    }

    //Buscar produtos por departamento
        controller.buscarProdutosPorDepartamento = function(req, res){
      var departamento = req.params.departamento;
      Produto.find().where("departamento").equals(departamento).exec()
      .then(
        function(produtos){
          res.json(produtos);
        },
        function(erro){
          console.error(erro);
          res.status(500).json(erro);
        });

    }

        //Buscar produtos por usuario
        controller.buscarProdutosPorUsuario = function(req, res){
      var usuario = req.params.usuario;
      Produto.find().select().where("usuario").equals(usuario).exec()
      .then(
        function(produtos){
          res.json(produtos);
        },
        function(erro){
          console.error(erro);
          res.status(500).json(erro);
        });

    }


  	 //Salvar novo Produto
  	controller.salvarProduto = function(req, res) {
       var produto = new Produto(req.body);
       produto.save(function(erro, produto){
        if(erro){
          res.status(500).json(erro);
          console.log(erro);
        }else{
          res.json(produto);
        }

       });
  	}; 

       //Atualizar novo Produto
    controller.atualizarProduto = function(req, res) {
       var _id =req.body._id;
       if(_id){
        Produto.findByIdAndUpdate(_id, req.body).exec()
          .then(function(produto){
            res.json(produto);
          }, function(erro){
            console.error(erro);
            res.status(500).json(erro);
          })
       }else{
          res.status(500).json(new Erro(404, "Produto não localizado"));
       }
    }; 


    //Remover produto
    controller.removerProduto = function(req, res){
      var _id = req.body._id;
      if(_id){
        Produto.remove({"_id" : _id}).exec()
          .then(function(){
            res.end();
          }, function(erro){
            console.error(erro);
            res.status(500).json(erro);
          })
      }
        else{
          res.status(500).json(new Erro(404, "Produto nao localizado"));
        }

    }

  	return controller; 
  };
